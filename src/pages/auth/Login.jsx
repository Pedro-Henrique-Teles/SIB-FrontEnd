import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Checkbox } from "@heroui/react";
import { Lock, Mail, ArrowLeft, Eye, EyeOff, ShieldCheck } from "lucide-react";
import AuthFooter from "../../components/ui/AuthFooter";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação temporária de autenticação / redirecionamento
    setTimeout(() => {
      setIsLoading(false);
      navigate("/admin");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-[#3f1616] flex flex-col justify-between selection:bg-[#7a2c2c] selection:text-white">
      {/* Barra superior com botão voltar */}
      <header className="p-4 sm:p-6 flex items-center justify-between max-w-5xl w-full mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-white bg-neutral-900/60 hover:bg-neutral-800 px-3.5 py-2 rounded-xl border border-neutral-800 transition duration-200"
        >
          <ArrowLeft size={16} />
          <span>Voltar ao Site</span>
        </Link>

        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <ShieldCheck size={16} className="text-emerald-400" />
          <span className="hidden sm:inline">Acesso Restrito à Liderança</span>
        </div>
      </header>

      {/* Conteúdo Central: Card de Login */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Logo e Título */}
          <div className="text-center space-y-2">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img
                src="/img/icons/logoSibBranca.png"
                alt="Logo SIB"
                className="h-12 w-auto mx-auto object-contain"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Acesso Administrativo
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400">
              Entre com suas credenciais para gerenciar a diretoria SIB-JF
            </p>
          </div>

          {/* Formulário de Login */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                E-mail ou Usuário
              </label>
              <Input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@sibjf.org.br"
                variant="bordered"
                startContent={<Mail size={18} className="text-neutral-500" />}
                className="w-full"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="login-password" className="block text-xs font-medium text-neutral-300">
                  Senha
                </label>
                <button
                  type="button"
                  className="text-xs text-red-400 hover:text-red-300 underline underline-offset-2"
                  onClick={() => alert("Entre em contato com a secretaria para redefinir sua senha.")}
                >
                  Esqueceu a senha?
                </button>
              </div>
              <Input
                id="login-password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                variant="bordered"
                startContent={<Lock size={18} className="text-neutral-500" />}
                endContent={
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="focus:outline-none text-neutral-400 hover:text-white"
                  >
                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                }
                className="w-full"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <Checkbox
                isSelected={rememberMe}
                onValueChange={setRememberMe}
                size="sm"
                color="danger"
              >
                <span className="text-xs text-neutral-300">Lembrar-me neste dispositivo</span>
              </Checkbox>
            </div>

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full font-bold bg-[#571f1f] hover:bg-[#702424] text-white py-3 rounded-xl transition duration-200 mt-2 shadow-lg shadow-red-950/40"
            >
              Entrar no Sistema
            </Button>
          </form>
        </div>
      </main>

      {/* Rodapé da tela de autenticação com links obrigatórios para Termos e Privacidade */}
      <AuthFooter className="px-4" />
    </div>
  );
};

export default Login;
