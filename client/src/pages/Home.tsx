/**
 * Direção: Precisão Acolhedora — editorial premium de saúde, com foco em
 * benefícios concretos, azul-petróleo, marfim quente e hero central sobre retrato profissional.
 */
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  Cross,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5542991477764";
const LAB_URL = "https://www.instagram.com/fabricadosorrisouva/";
const ASSET_BASE_URL = "https://odontoshop-eozqc6ab.manus.space/manus-storage";
const TEAM_IMAGE = `${ASSET_BASE_URL}/luiz-bassi-marcia-moreira-retrato-profissional_8ff62075.png`;
const FACADE_IMAGE = `${ASSET_BASE_URL}/luiz-bassi-marcia-moreira-fachada-oficial_7e124aec.jpg`;
const OFFICIAL_LOGO = `${ASSET_BASE_URL}/luiz-bassi-marcia-moreira-logo-crop_96cd831a.png`;

const treatments = [
  {
    index: "01",
    title: "Cuidar antes de incomodar",
    text: "Um acompanhamento que ajuda você a evitar problemas e cuidar do sorriso antes que algo incomode.",
    icon: ShieldCheck,
  },
  {
    index: "02",
    title: "Mais confiança ao sorrir",
    text: "Soluções pensadas para que seu sorriso reflita quem você é, com naturalidade e planejamento.",
    icon: Sparkles,
  },
  {
    index: "03",
    title: "Voltar a comer com conforto",
    text: "Próteses, implantes e tratamentos que devolvem conforto para comer, falar e sorrir com segurança.",
    icon: ScanLine,
  },
  {
    index: "04",
    title: "Tranquilidade desde cedo",
    text: "Uma primeira experiência acolhedora para criar hábitos saudáveis e tranquilidade desde cedo.",
    icon: Cross,
  },
  {
    index: "05",
    title: "Uma equipe que trabalha junta",
    text: "Ortodontia, endodontia, periodontia e mais: especialistas que conversam entre si por você.",
    icon: Stethoscope,
  },
  {
    index: "06",
    title: "Mais clareza para decidir",
    text: "Avaliação cuidadosa e exames por imagem para tornar cada decisão mais clara e previsível.",
    icon: Microscope,
  },
];

function BrandLockup() {
  return (
    <div className="brand-lockup" aria-label="Luiz Bassi e Márcia Moreira Odontologia">
      <img className="brand-official-logo" src={OFFICIAL_LOGO} alt="Luiz Bassi e Márcia Moreira Odontologia" />
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-link" href="#inicio" onClick={closeMenu}>
          <BrandLockup />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#cuidado">Como cuidamos</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#clinica">A clínica</a>
          <a href="#localizacao">Localização</a>
        </nav>

        <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          <span>Falar com a equipe</span>
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={mobileMenuOpen ? "Fechar navegação" : "Abrir navegação"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {mobileMenuOpen && (
          <div className="mobile-menu" aria-label="Navegação móvel">
            <a href="#cuidado" onClick={closeMenu}>Como cuidamos</a>
            <a href="#tratamentos" onClick={closeMenu}>Tratamentos</a>
            <a href="#clinica" onClick={closeMenu}>A clínica</a>
            <a href="#localizacao" onClick={closeMenu}>Localização</a>
            <a className="mobile-menu-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp <ArrowRight size={17} />
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-background" aria-hidden="true">
            <img src={TEAM_IMAGE} alt="" />
          </div>
          <div className="hero-grid">
            <div className="hero-copy hero-copy-centered reveal-up">
              <p className="eyebrow"><span className="eyebrow-dot" />Odontologia feita para a sua vida</p>
              <h1 id="hero-title">Seu sorriso merece um plano <i>pensado para você.</i></h1>
              <p className="hero-lede">
                Mais do que tratar dentes, ajudamos você a viver com conforto, confiança e tranquilidade em cada etapa do cuidado.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <CalendarDays size={18} />
                  Agendar uma conversa
                </a>
                <a className="text-link" href="#cuidado">
                  Entenda como cuidamos <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-quote">
                <span className="caption-line" />
                <p>Escuta atenta, planejamento claro e cuidado contínuo.</p>
              </div>
              <div className="hero-trust">
                <div className="trust-mark"><BadgeCheck size={20} /></div>
                <p><strong>Mais de 20 anos</strong> cuidando de sorrisos em União da Vitória.</p>
              </div>
            </div>
          </div>
          <a className="hero-scroll" href="#cuidado" aria-label="Ir para como cuidamos">
            <span>role para descobrir</span><ChevronDown size={18} />
          </a>
        </section>

        <section className="proof-strip" aria-label="Destaques da clínica">
          <div className="proof-item"><strong>20+</strong><span>anos de experiência</span></div>
          <div className="proof-item"><strong>11</strong><span>cadeiras odontológicas</span></div>
          <div className="proof-item"><strong>todas</strong><span>as especialidades em um só lugar</span></div>
          <div className="proof-item"><strong>1</strong><span>plano de cuidado centrado em você</span></div>
        </section>

        <section className="care-intro section-shell" id="cuidado" aria-labelledby="care-title">
          <div className="section-marker"><span>01</span><i /></div>
          <div className="care-head">
            <p className="eyebrow eyebrow-dark">Cuidado que se torna simples</p>
            <h2 id="care-title">Você não precisa saber qual tratamento escolher. <i>Você só precisa começar.</i></h2>
          </div>
          <p className="care-summary">
            Cada consulta começa com uma conversa. Entendemos o que você precisa agora, o que pode prevenir no futuro e montamos um caminho claro para seguir com segurança.
          </p>

          <div className="care-steps">
            <article className="care-step">
              <span>01</span>
              <h3>Você conta</h3>
              <p>O que trouxe você até aqui, suas dúvidas e o que espera sentir ao voltar a sorrir.</p>
            </article>
            <article className="care-step">
              <span>02</span>
              <h3>Nós avaliamos</h3>
              <p>Com atenção clínica, recursos de diagnóstico e especialistas que olham o todo.</p>
            </article>
            <article className="care-step">
              <span>03</span>
              <h3>Construímos juntos</h3>
              <p>Um plano possível, explicado em cada detalhe e no seu ritmo.</p>
            </article>
          </div>
        </section>

        <section className="treatments section-shell" id="tratamentos" aria-labelledby="treatments-title">
          <div className="treatment-head">
            <div>
              <p className="eyebrow eyebrow-dark">Para cada momento do seu sorriso</p>
              <h2 id="treatments-title">Cuidado completo, <i>sem caminhos desconectados.</i></h2>
            </div>
            <p>Uma equipe multidisciplinar para você resolver o que precisa hoje e manter o que conquistou amanhã.</p>
          </div>
          <div className="treatment-list">
            <article className="treatment-feature">
              <div className="treatment-card-top"><span>{treatments[0].index}</span><ShieldCheck size={23} strokeWidth={1.65} /></div>
              <div className="signature-route" aria-hidden="true"><i /><b /><i /></div>
              <p className="feature-kicker">O ponto de partida</p>
              <h3>{treatments[0].title}</h3>
              <p>{treatments[0].text}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Começar pelo cuidado <ArrowRight size={16} />
              </a>
            </article>
            <div className="treatment-card-list">
              {treatments.slice(1).map(({ index, title, text, icon: Icon }) => (
                <article className="treatment-card" key={index}>
                  <div className="treatment-card-top"><span>{index}</span><Icon size={20} strokeWidth={1.65} /></div>
                  <div className="signature-route signature-route-small" aria-hidden="true"><i /><b /><i /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Entender mais sobre ${title}`}>
                    Entender o que faz sentido <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lab-section" aria-labelledby="lab-title">
          <div className="lab-orbit lab-orbit-one" />
          <div className="lab-orbit lab-orbit-two" />
          <div className="lab-content section-shell">
            <div className="lab-copy">
              <p className="eyebrow"><span className="eyebrow-dot" />Um cuidado que continua nos detalhes</p>
              <h2 id="lab-title">Da avaliação ao acabamento, cada etapa importa.</h2>
              <p>
                Em tratamentos de reabilitação, a conexão com a <strong>Fábrica do Sorriso</strong>, nosso laboratório de prótese parceiro, aproxima cuidado clínico e precisão artesanal para que a solução final respeite você em cada detalhe.
              </p>
              <a className="lab-link" href={LAB_URL} target="_blank" rel="noreferrer">
                Conheça a Fábrica do Sorriso <ExternalLink size={16} />
              </a>
            </div>
            <div className="lab-detail">
              <div className="lab-mark"><Microscope size={28} /><span>precisão<br />em cada<br />detalhe</span></div>
              <div className="lab-lines"><i /><i /><i /><i /></div>
              <p>Laboratório de prótese parceiro<br />União da Vitória · PR</p>
            </div>
          </div>
        </section>

        <section className="clinic section-shell" id="clinica" aria-labelledby="clinic-title">
          <div className="clinic-image-block">
            <img className="clinic-facade" src={FACADE_IMAGE} alt="Fachada da clínica Luiz Bassi e Márcia Moreira em União da Vitória" />
            <div className="clinic-facade-shade" />
            <div className="clinic-location-marker">
              <span>União da Vitória</span>
              <p>Uma estrutura pensada para cuidar de você.</p>
            </div>
          </div>
          <div className="clinic-copy">
            <p className="eyebrow eyebrow-dark">A clínica</p>
            <h2 id="clinic-title">Estrutura, experiência e uma equipe que <i>gosta de cuidar.</i></h2>
            <p>
              Luiz Bassi e Márcia Moreira construíram, desde 2003, uma clínica em que especialistas trabalham de forma integrada e cada paciente é recebido com atenção de verdade. O resultado é uma odontologia completa, humana e feita para durar.
            </p>
            <a className="text-link dark-link" href="#localizacao">Venha nos conhecer <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="visit" id="localizacao" aria-labelledby="visit-title">
          <div className="visit-content section-shell">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />Seu próximo passo pode começar hoje</p>
              <h2 id="visit-title">Vamos cuidar do seu sorriso com calma e clareza.</h2>
              <a className="button-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Falar pelo WhatsApp
              </a>
            </div>
            <div className="visit-info">
              <div><MapPin size={19} /><p><strong>Onde estamos</strong><span>R. Cel. João Gualberto, 175<br />Centro · União da Vitória — PR</span></p></div>
              <a href="https://www.google.com/maps/search/?api=1&query=R.+Cel.+Jo%C3%A3o+Gualberto,+175,+Uni%C3%A3o+da+Vit%C3%B3ria+-+PR" target="_blank" rel="noreferrer">Abrir no mapa <ExternalLink size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><BrandLockup /></div>
        <p>Odontologia para uma vida com mais conforto, saúde e confiança.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/luizbassiemarciamoreira.odonto/" target="_blank" rel="noreferrer">Instagram</a>
          <a href={LAB_URL} target="_blank" rel="noreferrer">Fábrica do Sorriso</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} Luiz Bassi &amp; Márcia Moreira Odontologia.</span>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
