import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { EnquiryFormModal } from './components/EnquiryFormModal';
import { ChatbaseWidget } from './components/ChatbaseWidget';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

import { Product } from './types';

function AppContent() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategoryFilter(catId);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSelectProduct={setSelectedProduct}
      />

      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={setActiveTab}
            onSelectProduct={setSelectedProduct}
            onSelectCategory={handleSelectCategory}
            onSearchSubmit={handleSearchSubmit}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            onSelectProduct={setSelectedProduct}
            selectedCategoryFilter={selectedCategoryFilter}
            setSelectedCategoryFilter={setSelectedCategoryFilter}
            initialSearchQuery={searchQuery}
          />
        )}

        {activeTab === 'categories' && (
          <CategoriesPage
            onSelectCategory={handleSelectCategory}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage onNavigate={setActiveTab} />
        )}

        {activeTab === 'brands' && (
          <CategoriesPage
            onSelectCategory={handleSelectCategory}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage onNavigate={setActiveTab} />
        )}

        {activeTab === 'contact' && <ContactPage />}

        {activeTab === 'admin' && <AdminPage />}
      </main>

      <Footer onNavigate={setActiveTab} />

      <CartDrawer onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={setSelectedProduct}
      />

      <EnquiryFormModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />

      <ChatbaseWidget onNavigateToProducts={handleSearchSubmit} />

      <WhatsAppButton />

      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
