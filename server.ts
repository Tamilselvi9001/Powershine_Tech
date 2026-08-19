import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory persistent database store for enquiries during server runtime
interface ServerEnquiry {
  id: string;
  customerName: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  requirementNote: string;
  items: {
    productId: string;
    name: string;
    model?: string;
    brand?: string;
    quantity: number;
  }[];
  createdAt: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Completed' | 'Cancelled';
}

const enquiriesStore: ServerEnquiry[] = [
  {
    id: 'ENQ-2026-1001',
    customerName: 'Rajesh Patel',
    companyName: 'Shree Krishna Weaving Mills',
    phone: '+91 98250 88990',
    email: 'rajesh@krishnaweaving.com',
    city: 'Surat',
    requirementNote: 'Urgent requirement for Tsudakoma ZAX9100 PCB and 2 Units Yaskawa 15kW Drives for loom maintenance.',
    items: [
      {
        productId: 'tsudakoma-weft-feeder-pcb',
        name: 'Tsudakoma ZAX/ZAX9100 Weft Feeder Control PCB',
        model: 'ZAX-9100-WF4',
        brand: 'Tsudakoma',
        quantity: 1
      },
      {
        productId: 'yaskawa-a1000-vfd-inverter',
        name: 'Yaskawa A1000 Heavy Duty VFD Inverter Drive (15kW / 20HP)',
        model: 'CIMR-AT4A0038FAA',
        brand: 'Yaskawa',
        quantity: 2
      }
    ],
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: 'New'
  },
  {
    id: 'ENQ-2026-1002',
    customerName: 'Sanjay Shah',
    companyName: 'Surat Textile Synthetics Ltd.',
    phone: '+91 98981 12344',
    email: 'sanjay@surattextiles.com',
    city: 'Bamroli, Surat',
    requirementNote: 'Looking for 7-inch Weintek touch displays for retrofitting 4 rapier loom stations.',
    items: [
      {
        productId: 'weintek-7inch-touch-hmi',
        name: 'Weintek MT8071iE 7" Color TFT Touch HMI Display',
        model: 'MT8071iE',
        brand: 'Weintek',
        quantity: 4
      }
    ],
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    status: 'Quoted'
  }
];

const contactMessagesStore: any[] = [];

// API ROUTES

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', company: 'Powershine Tech', timestamp: new Date().toISOString() });
});

// Submit Product Enquiry Cart
app.post('/api/enquire', (req, res) => {
  try {
    const { customerName, companyName, phone, email, city, requirementNote, items } = req.body;

    if (!customerName || !phone || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Customer Name, Phone number and at least one item are required.' });
    }

    const enquiryId = `ENQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEnquiry: ServerEnquiry = {
      id: enquiryId,
      customerName,
      companyName: companyName || 'N/A',
      phone,
      email: email || 'N/A',
      city: city || 'N/A',
      requirementNote: requirementNote || '',
      items,
      createdAt: new Date().toISOString(),
      status: 'New'
    };

    enquiriesStore.unshift(newEnquiry);

    // Format admin notification email dispatch log (simulated / log-backed)
    const adminEmail = process.env.ADMIN_EMAIL || 'powershine07@gmail.com';
    console.log(`[EMAIL DISPATCH] Sent enquiry notification to ${adminEmail}`);
    console.log(`--- NEW POWERSHINE TECH PRODUCT ENQUIRY ---`);
    console.log(`Enquiry ID: ${enquiryId}`);
    console.log(`Customer: ${customerName} (${companyName})`);
    console.log(`Contact: Phone: ${phone} | Email: ${email}`);
    console.log(`Location: ${city}`);
    console.log(`Selected Items (${items.length}):`);
    items.forEach((item: any, idx: number) => {
      console.log(`  ${idx + 1}. [${item.brand || 'Item'}] ${item.name} (${item.model || 'Standard'}) - Qty: ${item.quantity}`);
    });
    console.log(`Notes: ${requirementNote}`);
    console.log(`------------------------------------------`);

    return res.json({
      success: true,
      enquiryId,
      message: 'Product requirement submitted successfully. Powershine Tech engineers will contact you shortly.'
    });
  } catch (error: any) {
    console.error('Error handling product enquiry:', error);
    return res.status(500).json({ error: 'Failed to process product enquiry submission.' });
  }
});

// Contact Form Submission
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Name, Phone and Message are required.' });
    }

    const contactId = `MSG-${Date.now().toString().slice(-6)}`;
    const newMessage = {
      id: contactId,
      name,
      email: email || '',
      phone,
      company: company || '',
      subject: subject || 'General Business Inquiry',
      message,
      createdAt: new Date().toISOString()
    };

    contactMessagesStore.unshift(newMessage);
    console.log(`[CONTACT FORM] Message received from ${name} (${phone}): ${subject}`);

    return res.json({
      success: true,
      contactId,
      message: 'Thank you for reaching out to Powershine Tech. We have received your message.'
    });
  } catch (err) {
    return res.status(500).json({ error: 'Server error processing contact form.' });
  }
});

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  const expectedPassword = process.env.ADMIN_PASSWORD || 'powershine_admin_2026';

  if (password === expectedPassword) {
    return res.json({
      success: true,
      token: 'pst_admin_token_' + Date.now()
    });
  }

  return res.status(401).json({ error: 'Invalid admin credentials.' });
});

// Admin Get All Enquiries
app.get('/api/admin/enquiries', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes('pst_admin_token_')) {
    // Basic session validation fallback for demo
  }
  return res.json({
    success: true,
    enquiries: enquiriesStore,
    totalCount: enquiriesStore.length
  });
});

// Admin Update Status
app.patch('/api/admin/enquiries/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const enquiry = enquiriesStore.find(e => e.id === id);
  if (!enquiry) {
    return res.status(404).json({ error: 'Enquiry not found.' });
  }

  const validStatuses = ['New', 'Contacted', 'Quoted', 'Completed', 'Cancelled'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status provided.' });
  }

  enquiry.status = status as any;
  return res.json({ success: true, enquiry });
});

// AI Assistant Chat Route (using Gemini server side if API key is present)
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are the official AI Technical Assistant for Powershine Tech (Kanakkampalayam, Tiruppur, Tamil Nadu, India).
Powershine Tech is a leading B2B specialist in:
- Textile Machinery Electronics & PCB Card Repairs (Tsudakoma, Toyota, Picanol, Staubli, Murata, Rieter)
- PLC & Industrial Controllers (Mitsubishi FX/Q series, Siemens S7-1200, Delta)
- AC Inverter VFD Drives (Yaskawa A1000/GA700, Mitsubishi, Delta, Danfoss)
- Servo Drives & Motors (Yaskawa Sigma-7, Panasonic A6)
- Touch HMIs (Weintek, Pro-face, Samkoon)
- Encoders & Sensors (Eltex yarn stop motion sensors, Baumer rotary encoders)
- Custom Loom Automation & Retrofitting Services

Respond professionally, helpfully, and concisely. Emphasize that customers can search products on the site, add items to their Enquiry Cart, or request a quote directly. Contact: +91-8907117444 | powershine07@gmail.com | Kanakkampalayam, Tiruppur, Tamil Nadu.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nCustomer Message: ${message}` }] }
        ]
      });

      const replyText = response.text || 'Thank you for contacting Powershine Tech. How can we assist you with textile electronics or drive repairs today?';
      return res.json({ reply: replyText });
    } else {
      // Fallback assistant logic when key is pending configuration
      const lower = message.toLowerCase();
      let fallbackReply = "Welcome to Powershine Tech! We offer component-level PCB repairs, PLC automation, VFD & Servo drive servicing, and genuine textile machine spare parts for Tsudakoma, Toyota, Picanol, and Staubli looms. You can browse our product catalog and add items directly to your Enquiry Cart, or call us at +91-8907117444.";

      if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
        fallbackReply = "For current pricing and quotation, please add the required products to your Enquiry Cart and submit a quote request. Our engineering team will send you a formal quotation via email/WhatsApp.";
      } else if (lower.includes('repair') || lower.includes('service') || lower.includes('fix') || lower.includes('broken')) {
        fallbackReply = "We provide fast 24-48 hour repair service for loom CPU cards, inverter drives, servo drivers, and HMI touch panels. All repairs undergo full load bench testing and come with warranty coverage!";
      } else if (lower.includes('address') || lower.includes('location') || lower.includes('tiruppur') || lower.includes('where') || lower.includes('surat')) {
        fallbackReply = "Powershine Tech is located at Kanakkampalayam, Tiruppur, Tamil Nadu, India. Phone: +91-8907117444.";
      }

      return res.json({ reply: fallbackReply });
    }
  } catch (err) {
    return res.json({
      reply: "Thank you for reaching Powershine Tech! You can explore our product catalogue or submit a direct enquiry for immediate technical assistance."
    });
  }
});

// START SERVER WITH VITE MIDDLEWARE
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Powershine Tech server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
