import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  CreditCard, 
  Copy, 
  Check, 
  Lock, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  // Credit card state
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  if (!isOpen) return null;

  const pixMockCode = '00020126580014br.gov.bcb.pix0136minharotina-vitalicio-4990-checkout520400005303986540549.905802BR5920Minha Rotina Ai6009Sao Paulo62070503***6304E8F2';

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(pixMockCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Por favor, preencha seu nome e e-mail para receber as instruções de acesso.');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPurchased(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Fechar checkout"
        >
          <X className="h-5 w-5" />
        </button>

        {!isPurchased ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">
                  Checkout Seguro
                </h3>
                <p className="text-xs text-slate-500">
                  Acesso Vitalício · Sem mensalidades
                </p>
              </div>
            </div>

            {/* Order Summary Pill */}
            <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900">Minha Rotina Aí</div>
                <div className="text-xs text-slate-500">Licença Vitalícia Completa + Modo Agora</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-emerald-700">R$ 49,90</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Pagamento único</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleCompleteOrder} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Melhor E-mail (para envio do login)
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* Payment Method Selector */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold border transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <QrCode className="h-4 w-4 text-emerald-600" />
                    <span>Pix (Liberação Imediata)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold border transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <CreditCard className="h-4 w-4 text-blue-600" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Method Specific Fields */}
              {paymentMethod === 'pix' ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs space-y-3">
                  <div className="flex items-center justify-between text-emerald-800 font-bold">
                    <span>Chave Pix Copia e Cola</span>
                    <span className="text-[10px] text-emerald-700">Aprovação em segundos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={pixMockCode}
                      className="w-full rounded-lg bg-white px-2.5 py-2 text-[11px] font-mono text-slate-800 border border-slate-300 truncate"
                    />
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="inline-flex items-center gap-1 shrink-0 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                    >
                      {copiedPix ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Abra o app do seu banco, escolha Pix &gt; Copia e Cola e conclua o pagamento de R$ 49,90.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 font-mono text-xs focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Validade (MM/AA)</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 font-mono text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 font-mono text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Parcelamento disponível em até 5x sem juros de R$ 9,98.
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Processando confirmação...</span>
                  ) : (
                    <>
                      <span>CONCLUIR PEDIDO (R$ 49,90)</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Security Footnote */}
              <div className="flex items-center justify-center gap-2 text-center text-[11px] text-slate-500 pt-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Ambiente protegido com criptografia de 256 bits</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mb-4 animate-in zoom-in">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="font-display text-2xl font-black text-slate-900">
              Pagamento Confirmado!
            </h3>

            <p className="mt-2 text-sm text-emerald-700 font-bold">
              Parabéns, {name || 'você'}! Seu acesso vitalício está garantido.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">E-mail cadastrado:</span>
                <span className="font-bold text-slate-900">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Plano:</span>
                <span className="font-bold text-emerald-700">Acesso Vitalício Minha Rotina Aí</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mensalidade:</span>
                <span className="font-bold text-slate-900">R$ 0,00 (Sem mensalidade)</span>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-600 leading-relaxed">
              Enviamos as credenciais e o link direto de ativação para <strong>{email}</strong>. Você já pode acessar seu painel e configurar o Modo Agora.
            </p>

            <div className="mt-6">
              <button
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white hover:bg-emerald-700 transition-colors cursor-pointer shadow-md"
              >
                <span>ACESSAR MINHA ROTINA AÍ</span>
                <Sparkles className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
