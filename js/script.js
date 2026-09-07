'use strict';

/* =========================================================
 *  ZENLESS ZONE ZERO — XATSPACE V27
 *  ---------------------------------------------------------
 *  LOGIN COMPATIBLE CON XATSPACE / IFRAME SANDBOX
 *
 *  V27:
 *  - Sincronización completa del reproductor
 *  - RANK en todos los Agents
 *  - Estadísticas para Nece
 *  - Tabla de stats en ABOUT
 *  ========================================================= */

const CONFIG = {

  /* =======================================================
   *  PERFIL PRINCIPAL
   *  ======================================================= */

  perfil: {
    nombre: 'Nece',
    id: '2200022',
    avatar: 'assets/avatar/nece.png',
    steam: 'https://steamcommunity.com/id/xNece/',
    aboutRender: 'assets/about/nece-render.png',

    nivel: 120,
    rango: 'S+++',
    rol: 'Agent / Rupture & Anihilation',

    stats: {
      hp: '12,500',
      atk: '3,250',
      def: '1,420',
      impact: '94',
      critRate: '82.5%',
      critDmg: '125.0%',
      anomalyMastery: '132',
      anomalyProficiency: '318',
      penRatio: '5%',
      energyRegen: '1.6',
      dmgEther: '65%'
    }
  },


  /* =======================================================
   *  INTRO
   *  ======================================================= */

  intro: {
    backgroundImage: 'assets/intro/zzz-bg.jpg',
    backgroundVideo: 'assets/intro/zzz-intro.mp4',
    title: 'NECE // ZENLESS ZONE ZERO',
    subtitle: 'NEW ERIDU / CONNECTION ESTABLISHED'
  },


  /* =======================================================
   *  FRIENDS / AGENTS
   *  ======================================================= */

  amigos: [

    {
      nombre: 'Mel',
      registro: 'xMelanie',
      id: '1522194120',
      avatar: 'assets/friends/amigo1.png',
      render: 'assets/signatures/amigo1.png',
      mensaje: 'El Watonsito pro uwu.',
      space: 'https://xat.me/1522194120',
      nivel: 100,
      rango: 'S++',

      stats: {
        hp: '10,097',
        atk: '2,872',
        def: '1,128',
        impact: '86',
        critRate: '80.2%',
        critDmg: '109.2%',
        anomalyMastery: '116',
        anomalyProficiency: '283',
        penRatio: '0%',
        energyRegen: '1.2',
        dmgEther: '58%'
      },

      rol: 'Agent / Anomaly'
    },


    {
      nombre: 'Tai',
      registro: 'Taiga',
      id: '90391591',
      avatar: 'assets/friends/amigo2.png',
      render: 'assets/signatures/amigo2.png',
      mensaje: '我问你: (ﾉ>ω<)ﾉ :｡･::･ﾟ’★,｡･::♪･ﾟ’☆ Mi querido gran amigo. Recuerdo como si fuera ayer el día que nos conocimos 为什么不能接受？ Gracias a Muzhi en un xat pedorro con nick de lolita jajaja. Te veías super cute, mejor que yo (? jaksajs. Gracias a él pude conocer a una gran persona; Honesta, dulce, respetuosa, carismático y sobre todo, una persona de gran corazón. Llegaste a mi vida en el momento justo, como si fuera una broma del destino. Entre todas las personas inmundas que conocí en xat, tú fuiste la única amistad que realmentevalió la pena. ༼つಠ益ಠ ༽つ ─=≡ΣO)): Cuántas alegrías y tristezas compartimos? Gracias por ser mi mejor amigo. Vamos hacia el futuro juntos,tú empujándome y yolevantándote siempre porque juntos somos indestructibles. (°▯°)',
      space: 'https://xat.me/90391591',
      nivel: 95,
      rango: 'S+',

      stats: {
        hp: '12,480',
        atk: '3,140',
        def: '1,305',
        impact: '92',
        critRate: '76.5%',
        critDmg: '118.4%',
        anomalyMastery: '125',
        anomalyProficiency: '310',
        penRatio: '4%',
        energyRegen: '1.4',
        dmgEther: '43%'
      },

      rol: 'Agent / Stunner'
    },


    {
      nombre: 'Kissie',
      registro: 'Redamancia',
      id: '1545198896',
      avatar: 'assets/friends/amigo3.png',
      render: 'assets/signatures/amigo3.png',
      mensaje: 'Nece ʚ₍ᐢ. .ᐢ₎ɞ, en el tiempo que llevo conociéndote, me caes muy bien y hemos podido establecer una bonita amistad, espero que se mantenga por mucho tiempo más! Se te quiero y aprecia mucho! Abrazos! ♡',
      space: 'https://xat.me/154519889',
      nivel: 56,
      rango: 'A++',

      stats: {
        hp: '11,240',
        atk: '2,690',
        def: '1,210',
        impact: '79',
        critRate: '72.4%',
        critDmg: '104.8%',
        anomalyMastery: '109',
        anomalyProficiency: '267',
        penRatio: '2%',
        energyRegen: '1.3',
        dmgEther: '32%'
      },

      rol: 'Agent / Anomaly'
    },


    {
      nombre: 'Bel',
      registro: 'Unluck',
      id: '1505034120',
      avatar: 'assets/friends/amigo4.png',
      render: 'assets/signatures/amigo4.png',
      mensaje: 'la waifu emo, ahora puedo decir que te conozco mejor y estoy agradecida de que me hayas acompañado cuando necesité, tambièn estoy para cuando necesites aunque nos ignores  tqmm nc y recordá VOS NACISTE PARA JUGAR ML',
      space: 'https://xat.me/1505034120',
      nivel: 68,
      rango: 'A+',

      stats: {
        hp: '12,020',
        atk: '2,980',
        def: '1,340',
        impact: '88',
        critRate: '78.1%',
        critDmg: '112.7%',
        anomalyMastery: '121',
        anomalyProficiency: '294',
        penRatio: '3%',
        energyRegen: '1.5',
        dmgEther: '22%'
      },

      rol: 'Agent / Attack'
    },


    {
      nombre: 'Lechu',
      registro: 'Lechuga',
      id: '195464300',
      avatar: 'assets/friends/amigo5.png',
      render: 'assets/signatures/amigo5.png',
      mensaje: 'Maldito infiel.',
      space: 'https://xat.me/195464300',
      nivel: 53,
      rango: 'A',

      stats: {
        hp: '9,860',
        atk: '2,430',
        def: '1,090',
        impact: '74',
        critRate: '69.8%',
        critDmg: '101.5%',
        anomalyMastery: '98',
        anomalyProficiency: '241',
        penRatio: '1%',
        energyRegen: '1.1',
        dmgEther: '17%'
      },

      rol: 'Agent / Attack'
    },


    {
      nombre: 'Rox',
      registro: 'Sardothein',
      id: '292726180',
      avatar: 'assets/friends/amigo6.png',
      render: 'assets/signatures/amigo6.png',
      mensaje: 'Oa amigo < 3. Quiero decirte que la verdad me divierto muchísimo conversando contigo en Discord, te conozco desde hace no mucho y no sé en qué momento empezó esta amistad, pero me alegra muchísimo tenerte como amigo y valoro un montón la confianza que hemos construido. Sabes que puedes contar conmigo con lo que sea, así como yo sé que puedo contar contigo. Tqm, mi Capri favorito 💛 —Rox.',
      space: 'https://xat.me/292726180',
      nivel: 77,
      rango: 'S',

      stats: {
        hp: '12,760',
        atk: '3,210',
        def: '1,390',
        impact: '95',
        critRate: '81.3%',
        critDmg: '121.6%',
        anomalyMastery: '128',
        anomalyProficiency: '322',
        penRatio: '5%',
        energyRegen: '1.6',
        dmgEther: '51%'
      },

      rol: 'Agent / Attack'
    },


    {
      nombre: 'Lugo',
      registro: 'iLuguinhoo',
      id: '266694246',
      avatar: 'assets/friends/amigo7.png',
      render: 'assets/signatures/amigo7.png',
      mensaje: '”No vemos las cosas como son, las vemos como somos." Firma: Lugod (﻿Cuidense de el)',
      space: 'https://xat.me/266694246',
      nivel: 61,
      rango: 'A+',

      stats: {
        hp: '11,580',
        atk: '2,870',
        def: '1,260',
        impact: '83',
        critRate: '75.7%',
        critDmg: '110.9%',
        anomalyMastery: '114',
        anomalyProficiency: '278',
        penRatio: '2%',
        energyRegen: '1.4',
        dmgEther: '40%'
      },

      rol: 'Agent / Attack'
    },


    {
      nombre: 'Feña',
      registro: 'zSunshinee',
      id: '164379262',
      avatar: 'assets/friends/amigo8.png',
      render: 'assets/signatures/amigo8.png',
      mensaje: 'Eres la queso y el jamón de mi sándwich, haces que el desayuno sea mas sabroso en mi vida.',
      space: 'https://xat.me/164379262',
      nivel: 89,
      rango: 'B++',

      stats: {
        hp: '13,140',
        atk: '3,360',
        def: '1,470',
        impact: '101',
        critRate: '83.6%',
        critDmg: '126.2%',
        anomalyMastery: '136',
        anomalyProficiency: '335',
        penRatio: '6%',
        energyRegen: '1.7',
        dmgEther: '37%'
      },

      rol: 'Agent / Support'
    },


    {
      nombre: 'Dami',
      registro: 'Keiou',
      id: '108534737',
      avatar: 'assets/friends/amigo9.png',
      render: 'assets/signatures/amigo9.png',
      mensaje: 'Hola Gordito grasiento, que bueno encontrarte en este momento de felicidad, te deseo que sea infinito, gracias por estar siempre para mi. Se te aprecia mucho, aunque a veces me desconozcas y seas una waifu tóxica. PD: Dormí un poco más y comé mejor, obeso.',
      space: 'https://xat.me/108534737',
      nivel: 75,
      rango: 'B+',

      stats: {
        hp: '10,125',
        atk: '3,360',
        def: '1,470',
        impact: '142',
        critRate: '32.4%',
        critDmg: '92.5%',
        anomalyMastery: '183',
        anomalyProficiency: '421',
        penRatio: '8%',
        energyRegen: '2.6',
        dmgEther: '39%'
      },

      rol: 'Agent / Stunner'
    },


    {
      nombre: 'Lance',
      registro: 'MostLySeLfish',
      id: '1555016996',
      avatar: 'assets/friends/amigo10.png',
      render: 'assets/signatures/amigo10.png',
      mensaje: 'En primer lugar, agradezco el detalle de incluirme en tu space. No me consideraba un gran protagonista en lo que llamemos “tu historia”, pero siempre que siga por ahí estaré disponible cuando tengas un dilema existencial. A pesar de desacuerdos, no solo puedes contar con mi humilde aportación humana cuando lo desees mientras yo esté, sino que agradezco haber recibido ayuda y conforte aún en momentos en los que no tenías por qué. Solo no me des ganas de aplicarte el comando !fusilar.Todos los días nos toca aprender cosas en nuestras vidas, y en ese proceso espero que sigas siendo la persona noble y sin maldad que hasta el momento me encontré.',
      space: 'https://xat.me/1555016996',
      nivel: 69,
      rango: 'B',

      stats: {
        hp: '18,140',
        atk: '1,450',
        def: '3,470',
        impact: '203',
        critRate: '72.4%',
        critDmg: '142.6%',
        anomalyMastery: '67',
        anomalyProficiency: '244',
        penRatio: '3%',
        energyRegen: '6.2',
        dmgEther: '19%'
      },

      rol: 'Agent / Rupture'
    },

    {
      nombre: 'Yuki',
      registro: 'Lynette',
      id: '1515302520',
      avatar: 'assets/friends/amigo11.png',
      render: 'assets/signatures/amigo11.png',
      mensaje: 'Hola, en primer lugar gracias por dejarme escribir en tu space, me hace feliz que me consideres para algo así de bonito. Por dónde empezar, nos conocemos hace un tiempo, no mucho para decir que somos compas de toda la vida pero no tan poco para simplemente tener charlas triviales. Solo quería agradecerte porque aunque te enojas re izi, siempre haz estado ahí para mí :3 y eso es algo que valoro mucho, me tienes tanta paciencia. No te rindes conmigo aún cuando hago tonterías y me sigues aconsejando. Gracias por tratar de animarme cuando me pasan cosas que me deprimen, tratas de hacer que piense en otras cosas o distraerme llevándome a bingos y más cosas. Solo quiero decirte que siempre estaré ahí para ti en lo que necesites y te estaré apoyando en todo. Quiero hacer por ti lo que tú haces por mi. Te quiero mucho Chris, siempre valorare todo lo que haz hecho por mi sin esperar nada a cambio y siempre voy a apreciarlo con todo mi corazón, espero realmente seamos amigos por muuuucho más tiempito, espero me lo puedas permitir, con cariño, Yuki <3. ',
      space: 'https://xat.me/1515302520',
      nivel: 79,
      rango: 'A++',

      stats: {
        hp: '9,123',
        atk: '1,740',
        def: '1,460',
        impact: '103',
        critRate: '67.4%',
        critDmg: '84.3%',
        anomalyMastery: '87',
        anomalyProficiency: '194',
        penRatio: '5%',
        energyRegen: '2.1',
        dmgEther: '21%'
      },

      rol: 'Agent / Support'
    },

  ],


  /* =======================================================
   *  MUSIC
   *  ======================================================= */

  musica: [

    {
      titulo: '60% Fantasy - Zenless Zone Zero OST',
      archivo: 'assets/music/tema1.mp3'
    },

    {
      titulo: '60% Daily - Zenless Zone Zero OST',
      archivo: 'assets/music/tema2.mp3'
    },

    {
      titulo: '60% Daily & Freedom - Zenless Zone Zero OST',
      archivo: 'assets/music/tema3.mp3'
    },

    {
      titulo: 'Underground Beats - Zenless Zone Zero OST',
      archivo: 'assets/music/tema4.mp3'
    },

    {
      titulo: 'Derailed Order Night- Zenless Zone Zero OST',
      archivo: 'assets/music/tema5.mp3'
    },

    {
      titulo: 'Come Alive Stripped - Zenless Zone Zero OST',
      archivo: 'assets/music/tema6.mp3'
    },

    {
      titulo: 'Tour de Inferno - Zenless Zone Zero OST',
      archivo: 'assets/music/tema7.mp3'
    }

  ],


  /* =======================================================
   *  GALLERY
   *  ======================================================= */

  galeria: [

    {
      archivo: 'assets/galeria/imagen1.png',
      titulo: 'Yi Xuan I'
    },

    {
      archivo: 'assets/galeria/imagen2.png',
      titulo: 'Yi Xuan II'
    },

    {
      archivo: 'assets/galeria/imagen3.png',
      titulo: 'Yi Xuan III'
    },

    {
      archivo: 'assets/galeria/imagen3.gif',
      titulo: 'Yi Xuan gif1'
    },

    {
      archivo: 'assets/galeria/imagen4.gif',
      titulo: 'Yi Xuan gif2'
    },

    {
      archivo: 'assets/galeria/imagen5.gif',
      titulo: 'Yi Xuan gif3'
    },

    {
      archivo: 'assets/galeria/imagen6.gif',
      titulo: 'Yi Xuan gif4'
    },

    {
      archivo: 'assets/galeria/imagen7.gif',
      titulo: 'Yi Xuan gif5'
    },

    {
      archivo: 'assets/galeria/imagen5.png',
      titulo: 'ZZZ'
    },

    {
      archivo: 'assets/galeria/imagen8.gif',
      titulo: 'Yi Xuan gif6'
    },

    {
      archivo: 'assets/galeria/imagen9.gif',
      titulo: 'Yi Xuan gif7'
    },

    {
      archivo: 'assets/galeria/imagen10.gif',
      titulo: 'Yi Xuan gif8'
    }

  ],


  /* =======================================================
   *  GAMES
   *  ======================================================= */

  juegos: [

    {
      nombre: 'Counter Strike 2',
      media: 'assets/games/cs2.gif',
      frase: 'Easy peasy lemon squeezy.',
      autor: 'Counter Terrorist.'
    },

    {
      nombre: 'Silent Hill 2',
      media: 'assets/games/sh2.gif',
      frase: 'En mis sueños más inquietos, veo esa ciudad, Silent Hill.',
      autor: 'Mary.'
    },

    {
      nombre: 'Left 4 Dead 2',
      media: 'assets/games/l4d2.gif',
      frase: 'Did I ever tell you about the time my buddy Keith...',
      autor: 'Ellis.'
    },

    {
      nombre: 'Madison',
      media: 'assets/games/madison.gif',
      frase: 'Dad? Please open the door! Dad!',
      autor: 'Lucas to your dad.'
    },

    {
      nombre: 'Dead Space',
      media: 'assets/games/ds2.gif',
      frase: 'N.I.C.O.L.E -- I.S -- D.E.A.D.',
      autor: 'The initials of each chapter of the game.'
    },

    {
      nombre: 'Strinova',
      media: 'assets/games/strinova.gif',
      frase: 'The preparations are complete. My performance is about to begin!',
      autor: 'Kanami.'
    },

    {
      nombre: 'Doom',
      media: 'assets/games/doom.gif',
      frase: 'He chose the path of perpetual torment.',
      autor: 'Slayer Testament I.'
    },

    {
      nombre: 'Mobile Legends',
      media: 'assets/games/mlbb.gif',
      frase: 'Experience the symphony of death!',
      autor: 'Granger.'
    },

    {
      nombre: 'Resident Evil Requiem',
      media: 'assets/games/rer.gif',
      frase: 'When was the last time you brushed your teeth?',
      autor: 'Leon to Gideon.'
    },

    {
      nombre: 'Resident Evil 4 Separate Ways',
      media: 'assets/games/re4.gif',
      frase: 'You know me. I keep my work strictly confidential.',
      autor: 'Ada to Leon.'
    }

  ],


  steamVideo: 'assets/steam/steam.mp4'

};


/* =========================================================
 *  UTILIDADES
 * ========================================================= */

const $ = (s, r = document) =>
r.querySelector(s);

const $$ = (s, r = document) =>
Array.from(r.querySelectorAll(s));

const escapeHTML = v =>
String(v ?? '').replace(
  /[&<>'"]/g,
  c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[c])
);


function safeUrl(url) {

  try {

    const u =
    new URL(url, location.href);

    return [
      'http:',
      'https:',
      'file:'
    ].includes(u.protocol)
    ? u.href
    : '#';

  } catch {

    return '#';

  }

}


function imageFallback(img) {

  if (!img) {
    return;
  }

  img.onerror = null;

  img.src =
  'assets/character/yixuan.png';

    img.style.opacity = '1';

}


/* =========================================================
 *  LOGIN V26
 *  ---------------------------------------------------------
 *  NO FORM
 *  NO SUBMIT
 *  COMPATIBLE CON XATSPACE SANDBOX
 * ========================================================= */

function setupLogin() {

  const introScreen =
  document.getElementById('gameIntro');

  const introRail =
  document.getElementById('introRail');

  const signInStart =
  document.getElementById('signInStart');

  const loginUser =
  document.getElementById('loginUser');

  const loginPass =
  document.getElementById('loginPass');

  const loginSubmit =
  document.getElementById('loginSubmit');

  const loginError =
  document.getElementById('loginError');

  const introVideo =
  document.getElementById('introVideo');

  const mainSpace =
  document.querySelector('.space');


  if (!introScreen) {
    return;
  }


  function openLogin() {

    introRail?.classList.add(
      'open',
      'login-mode'
    );


    try {

      if (introVideo) {

        introVideo.volume = 0.72;
        introVideo.muted = false;

        const promise =
        introVideo.play();

        if (promise?.catch) {
          promise.catch(() => {});
        }

      }

    } catch (_) {}


    setTimeout(
      () => loginUser?.focus(),
               420
    );

  }


  function enterSpace() {

    const user =
    loginUser?.value.trim() || '';

    const pass =
    loginPass?.value || '';


    if (!user || !pass) {

      if (loginError) {

        loginError.textContent =
        'Enter any username and password to continue.';

    loginError.classList.add(
      'show'
    );

      }

      return;

    }


    loginError?.classList.remove(
      'show'
    );


    try {

      if (introVideo) {

        introVideo.pause();
        introVideo.currentTime = 0;
        introVideo.muted = true;

      }

    } catch (_) {}


    introRail?.classList.add(
      'success'
    );

    introScreen?.classList.add(
      'leaving'
    );


    document.body.classList.add(
      'authenticated'
    );

    mainSpace?.classList.add(
      'authenticated'
    );


    setTimeout(
      () => {

        if (introScreen) {

          introScreen.hidden = true;

          introScreen.setAttribute(
            'aria-hidden',
            'true'
          );

        }

      },
      820
    );


    setTimeout(
      () => {

        try {

          window.__neceStartMusic?.();

        } catch (_) {}

      },
      850
    );

  }


  if (
    signInStart &&
    signInStart.dataset.loginBound !== '1'
  ) {

    signInStart.dataset.loginBound = '1';

    signInStart.addEventListener(
      'click',
      openLogin
    );

  }


  if (
    loginSubmit &&
    loginSubmit.dataset.loginBound !== '1'
  ) {

    loginSubmit.dataset.loginBound = '1';

    loginSubmit.addEventListener(
      'click',
      event => {

        event.preventDefault();
        event.stopPropagation();

        enterSpace();

      }
    );

  }


  [loginUser, loginPass].forEach(
    input => {

      if (!input) {
        return;
      }

      if (
        input.dataset.loginKeyBound === '1'
      ) {
        return;
      }

      input.dataset.loginKeyBound = '1';

      input.addEventListener(
        'keydown',
        event => {

          if (event.key !== 'Enter') {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          enterSpace();

        }
      );

    }
  );


  if (!window.__neceLoginKeyBound) {

    window.__neceLoginKeyBound = true;

    document.addEventListener(
      'keydown',
      event => {

        if (event.key !== 'Enter') {
          return;
        }

        if (
          !introScreen ||
          introScreen.hidden ||
          introScreen.classList.contains('leaving')
        ) {
          return;
        }

        if (
          introRail?.classList.contains('open')
        ) {
          return;
        }

        const active =
        document.activeElement;

        if (
          active?.matches?.(
            'input,textarea,select,button'
          )
        ) {
          return;
        }

        event.preventDefault();

        openLogin();

      }
    );

  }


  window.__neceEnterSpace =
  enterSpace;

  window.__neceOpenLogin =
  openLogin;

}


/* =========================================================
 *  INIT PRINCIPAL
 * ========================================================= */

function init() {

  const introScreen =
  $('#gameIntro');

  const mainSpace =
  $('.space');

  const introRail =
  $('#introRail');

  const introVideo =
  $('#introVideo');

  const introSound =
  $('#introSound');

  const sidePanel =
  $('#sidePanel');

  const panelContent =
  $('#panelContent');

  const backdrop =
  $('#panelBackdrop');

  const closePanel =
  $('#closePanel');

  const audio =
  $('#audio');

  const playPause =
  $('#playPause');

  const prevTrack =
  $('#prevTrack');

  const nextTrackBtn =
  $('#nextTrack');

  const muteBtn =
  $('#muteBtn');

  const progress =
  $('#progress');

  const dockTitle =
  $('#dockTitle');

  const visualizer =
  $('#visualizer');

  const audioStatus =
  $('#audioStatus');

  const hero =
  $('#hero');

  const stage =
  $('#characterStage');

  const character =
  $('#character');

  const canvas =
  $('#particles');

  const ctx =
  canvas?.getContext('2d');


  let currentTrack = 0;

  let historyStack = [];


  /* =======================================================
   *  PRELOADER
   * ======================================================= */

  setTimeout(
    () =>
    $('#preloader')?.classList.add(
      'done'
    ),
    650
  );


  /* =======================================================
   *  INTRO VIDEO AUDIO
   * ======================================================= */

  function updateIntroSoundUI() {

    if (
      !introSound ||
      !introVideo
    ) {
      return;
    }

    const on =
    !introVideo.muted &&
    introVideo.volume > 0;


    introSound.classList.toggle(
      'on',
      on
    );


    introSound
    .querySelector('span')
    ?.replaceChildren(
      document.createTextNode(
        on ? '🔊' : '🔇'
      )
    );


    introSound
    .querySelector('b')
    ?.replaceChildren(
      document.createTextNode(
        on
        ? 'SOUND ON'
        : 'SOUND'
      )
    );


    introSound.setAttribute(
      'aria-label',
      on
      ? 'Silenciar sonido'
      : 'Activar sonido'
    );

  }


  function playIntroVideo() {

    if (!introVideo) {
      return;
    }

    const promise =
    introVideo.play();

    if (
      promise &&
      typeof promise.catch === 'function'
    ) {

      promise.catch(() => {});

    }

  }


  function enableIntroVideoAudio() {

    if (!introVideo) {
      return;
    }

    introVideo.volume = 0.72;
    introVideo.muted = false;

    playIntroVideo();

    updateIntroSoundUI();

  }


  function toggleIntroSound() {

    if (!introVideo) {
      return;
    }

    if (
      introVideo.muted ||
      introVideo.volume === 0
    ) {

      enableIntroVideoAudio();

    } else {

      introVideo.muted = true;

      updateIntroSoundUI();

    }

  }


  introVideo?.addEventListener(
    'loadedmetadata',
    playIntroVideo
  );


  introVideo?.addEventListener(
    'play',
    updateIntroSoundUI
  );


  introSound?.addEventListener(
    'click',
    event => {

      event.stopPropagation();

      toggleIntroSound();

    }
  );


  playIntroVideo();


  document.addEventListener(
    'click',
    event => {

      if (
        !introScreen ||
        introScreen.hidden ||
        introScreen.classList.contains(
          'leaving'
        )
      ) {
        return;
      }

      if (
        event.target.closest(
          '#introSound'
        )
      ) {
        return;
      }

      if (introVideo?.muted) {
        enableIntroVideoAudio();
      }

    },
    {
      passive: true
    }
  );


  ['keydown', 'touchstart'].forEach(
    eventName => {

      document.addEventListener(
        eventName,
        () => {

          if (
            introScreen &&
            !introScreen.hidden &&
            !introScreen.classList.contains(
              'leaving'
            ) &&
            introVideo?.muted
          ) {

            enableIntroVideoAudio();

          }

        },
        {
          passive: true
        }
      );

    }
  );


  updateIntroSoundUI();


  /* =======================================================
   *  AUDIO PRINCIPAL
   * ======================================================= */

  function setAudioStatus(
    msg,
    type = ''
  ) {

    if (audioStatus) {

      audioStatus.textContent =
      msg;

      audioStatus.className =
      'audio-status ' + type;

    }

  }


  /*
   * IMPORTANTE V27:
   *
   * loadTrack() ahora actualiza también
   * los botones [data-track].
   *
   * De esta forma TODOS los métodos que
   * cambien currentTrack mantienen el
   * botón dorado sincronizado.
   */

  function loadTrack(
    i,
    autoplay = false
  ) {

    if (
      !audio ||
      !CONFIG.musica.length
    ) {
      return;
    }


    if (
      !Number.isFinite(i) ||
      !CONFIG.musica[i]
    ) {
      i = 0;
    }


    currentTrack = i;


    /* V27 — ACTUALIZAR BOTÓN ACTIVO */
    refreshTrackButtons();


    audio.src =
    CONFIG.musica[i].archivo;

    audio.load();


    if (dockTitle) {

      dockTitle.textContent =
      CONFIG.musica[i].titulo;

    }


    if (progress) {
      progress.value = 0;
    }


    setAudioStatus(
      'AUDIO // CARGANDO'
    );


    if (autoplay) {
      startPlayback();
    }

  }


  async function startPlayback() {

    if (!audio) {
      return false;
    }

    try {

      await audio.play();

      updatePlayUI();

      return true;

    } catch (e) {

      updatePlayUI();

      setAudioStatus(
        audio.error
        ? 'AUDIO // ' +
        audioErrorText(
          audio.error
        )
        : 'AUDIO // HAZ CLIC EN PLAY',
        'error'
      );

      return false;

    }

  }


  function audioErrorText(err) {

    return ({
      1: 'ABORTADO',
      2: 'ERROR DE RED',
      3: 'FORMATO MP3 NO SOPORTADO',
      4: 'ARCHIVO NO ENCONTRADO / RUTA INCORRECTA'
    })[
      err?.code
    ] || 'ERROR';

  }


  function updatePlayUI() {

    const paused =
    !audio ||
    audio.paused;


    if (playPause) {

      playPause.textContent =
      paused
      ? '▶'
      : 'Ⅱ';

      playPause.setAttribute(
        'aria-label',
        paused
        ? 'Reproducir'
        : 'Pausar'
      );

    }


    visualizer?.classList.toggle(
      'playing',
      !paused
    );


    const pp =
    $('#panelPlay');

    if (pp) {

      pp.textContent =
      paused
      ? '▶'
      : 'Ⅱ';

    }

  }


  function togglePlay() {

    if (audio?.paused) {

      startPlayback();

    } else {

      audio?.pause();

    }

  }


  function previousTrack() {

    const previous =
    (
      currentTrack -
      1 +
      CONFIG.musica.length
    ) %
    CONFIG.musica.length;


    loadTrack(
      previous,
      true
    );

  }


  function nextTrack() {

    const next =
    (
      currentTrack +
      1
    ) %
    CONFIG.musica.length;


    loadTrack(
      next,
      true
    );

  }


  /*
   * Actualiza todos los botones de canciones.
   *
   * Si el panel Music todavía no existe,
   * simplemente no hace nada.
   *
   * Cuando el panel se abra, renderMusic()
   * ya utilizará currentTrack.
   */

  function refreshTrackButtons() {

    $$('[data-track]').forEach(
      el => {

        const isActive =
        Number(
          el.dataset.track
        ) === currentTrack;


        el.classList.toggle(
          'active',
          isActive
        );


        if (isActive) {

          el.setAttribute(
            'aria-current',
            'true'
          );

        } else {

          el.removeAttribute(
            'aria-current'
          );

        }

      }
    );

  }


  function startIntroMusic() {

    loadTrack(
      0,
      false
    );


    startPlayback().then(
      ok => {

        setAudioStatus(
          ok
          ? 'AUDIO // ONLINE'
          : 'AUDIO // HAZ CLIC EN PLAY',
          ok
          ? 'ok'
          : 'error'
        );

      }
    );

  }


  window.__neceStartMusic =
  startIntroMusic;


  function stopIntroVideoSound() {

    if (!introVideo) {
      return;
    }

    try {

      introVideo.pause();
      introVideo.currentTime = 0;
      introVideo.muted = true;

    } catch (_) {}

  }


  /* =======================================================
   *  PANEL SCROLL
   * ======================================================= */

  function resetPanelScroll() {

    const panelInner =
    sidePanel?.querySelector(
      '.panel-inner'
    );


    if (panelInner) {

      panelInner.scrollTop = 0;

      panelInner.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

    }


    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }


  function showPanel() {

    sidePanel?.classList.add(
      'open'
    );


    sidePanel?.setAttribute(
      'aria-hidden',
      'false'
    );


    backdrop?.classList.add(
      'show'
    );


    document.body.classList.add(
      'panel-open'
    );


    requestAnimationFrame(
      () => resetPanelScroll()
    );


    setTimeout(
      resetPanelScroll,
      80
    );

  }


  function closeCurrentPanel() {

    document
    .getElementById(
      'aboutExternalRender'
    )
    ?.classList.remove(
      'show'
    );


    sidePanel?.classList.remove(
      'open'
    );


    sidePanel?.setAttribute(
      'aria-hidden',
      'true'
    );


    backdrop?.classList.remove(
      'show'
    );


    document.body.classList.remove(
      'panel-open'
    );


    historyStack = [];

  }


  function openPanel(
    title,
    html,
    pushHistory = true
  ) {

    if (!panelContent) {
      return;
    }


    if (title !== 'About me:') {

      document
      .getElementById(
        'aboutExternalRender'
      )
      ?.classList.remove(
        'show'
      );

    }


    if (
      pushHistory &&
      panelContent.innerHTML.trim()
    ) {

      historyStack.push(
        panelContent.innerHTML
      );

    }


    panelContent.innerHTML =
    '<div class="panel-kicker">' +

    (
      title === 'About me:'
      ? 'PROFILE // ABOUT'
      : 'NECE / ZENLESS ZONE ZERO'
    ) +

    '</div>' +

    '<h2 class="panel-title">' +

    escapeHTML(title) +

    '</h2>' +

    html;


    showPanel();


    /*
     * Si acabamos de abrir Music,
     * aseguramos el botón activo.
     */

    refreshTrackButtons();

  }


  function backButton() {

    return `
    <button
    class="back-btn"
    data-action="back"
    type="button"
    aria-label="Volver"
    title="Volver">
    ←
    </button>
    `;

  }


  function goBack() {

    if (historyStack.length) {

      panelContent.innerHTML =
      historyStack.pop();

      showPanel();

      refreshTrackButtons();

    } else {

      closeCurrentPanel();

    }

  }


  /* =======================================================
   *  STATS
   * ======================================================= */

  function statsRows(a) {

    const s =
    a.stats || {};


    const rank =
    a.rango ||
    a.rank ||
    '—';


  return [

    ['RANK', rank],

    ['HP', s.hp],

    ['ATK', s.atk],

    ['DEF', s.def],

    ['Impact', s.impact],

    ['CRIT Rate', s.critRate],

    ['CRIT DMG', s.critDmg],

    ['Anomaly Mastery', s.anomalyMastery],

    ['Anomaly Proficiency', s.anomalyProficiency],

    ['PEN Ratio', s.penRatio],

    ['Energy Regen', s.energyRegen],

    ['DMG Ether', s.dmgEther]

  ]
  .map(
    ([k, v]) =>

    '<div class="stat-cell">' +

    '<span>' +
    escapeHTML(k) +
    '</span>' +

    '<strong>' +
    escapeHTML(
      v || '—'
    ) +
    '</strong>' +

    '</div>'

  )
  .join('');

  }


  /* =======================================================
   *  FRIENDS
   * ======================================================= */

  function renderFriends() {

    const cards =
    CONFIG.amigos
    .map(
      (a, i) =>

      '<button class="friend-card" data-friend="' +
      i +
      '" type="button">' +

      '<div class="friend-portrait-wrap">' +

      '<img class="friend-avatar" src="' +
      escapeHTML(a.avatar) +
      '" alt="' +
      escapeHTML(a.nombre) +
      '" onerror="imageFallback(this)">' +

      '<span class="level-badge">' +
      'Lv. ' +
      escapeHTML(
        a.nivel || 1
      ) +
      '</span>' +

      '</div>' +

      '<div class="friend-card-info">' +

      '<div class="friend-name">' +
      escapeHTML(a.nombre) +
      '</div>' +

      '<div class="friend-register">' +
      escapeHTML(
        a.registro ||
        'USUARIO'
      ) +
      '</div>' +

      '<div class="friend-id">' +
      'ID ' +
      escapeHTML(a.id) +
      '</div>' +

      '</div>' +

      '<span class="friend-arrow">↗</span>' +

      '</button>'

    )
    .join('');


    openPanel(

      'Agents',

      '<p class="panel-desc">' +

      '"At any moment, if your mind remains clear, you can meet endless change with unchanging focus."' +

      '</p>' +

      '<div class="friend-list">' +

      cards +

      '</div>',

      false

    );

  }


  function renderFriendSignature(i) {

    const a =
    CONFIG.amigos[i];


    if (!a) {
      return;
    }


    const url =
    safeUrl(
      a.space || '#'
    );


    const link =
    url !== '#'

    ? '<a class="external-btn" href="' +
    escapeHTML(url) +
    '" target="_blank" rel="noopener noreferrer" aria-label="Visitar Space" title="Visitar Space">🔗</a>'

    : '';


    const bottomActions =

    '<div class="friend-actions friend-actions-bottom">' +

    backButton() +

    link +

    '</div>';


    const particles =
    Array.from(
      {
        length: 18
      },
      (_, n) =>
      '<i style="--p:' +
      n +
      '"></i>'
    ).join('');


    openPanel(

      a.nombre,

      '<div class="agent-detail">' +

      backButton() +

      '<div class="friend-detail-meta">' +

      '<span style="font-size: 0.95rem; font-weight: 600; letter-spacing: 0.08em;">' +
      escapeHTML(
        a.registro ||
        'USUARIO'
      ) +
      '</span>' +

      '<small style="font-size: 0.68rem; letter-spacing: 0.06em; opacity: 0.75;">ID ' +
      escapeHTML(a.id) +
      '</small>' +

      '</div>' +


      '<div class="signature-stage">' +

      '<div class="lightning l1"></div>' +

      '<div class="lightning l2"></div>' +

      '<div class="signature-particles">' +

      particles +

      '</div>' +

      '<img class="signature-image" src="' +
      escapeHTML(a.render) +
      '" alt="Firma de ' +
      escapeHTML(a.nombre) +
      '" onerror="this.style.display=\'none\'">' +

      '</div>' +


      '<div class="signature-head">' +

      '<span>AGENT PROFILE</span>' +

      '<strong>Lv. ' +
      escapeHTML(
        a.nivel || 1
      ) +
      '</strong>' +

      '<em>' +
      escapeHTML(
        a.rol ||
        'Agent'
      ) +
      '</em>' +

      '</div>' +


      '<div class="signature-message">' +

      escapeHTML(
        a.mensaje
      ) +

      '</div>' +


      '<div class="stats-panel">' +

      '<div class="stats-tabs">' +

      '<b>Base Stats</b>' +

      '<span>Skills</span>' +

      '<span>Equipment</span>' +

      '</div>' +

      '<div class="stats-grid">' +

      statsRows(a) +

      '</div>' +

      '</div>' +


      bottomActions +

      '</div>'

    );

  }


  /* =======================================================
   *  MUSIC PANEL
   * ======================================================= */

  function renderMusic() {

    const list =
    CONFIG.musica
    .map(
      (t, i) =>

      '<button class="track ' +

      (
        i === currentTrack
        ? 'active'
        : ''
      ) +

      '" data-track="' +
      i +
      '" type="button" aria-current="' +

      (
        i === currentTrack
        ? 'true'
        : 'false'
      ) +

      '">' +

      '<span class="track-number">' +

      String(i + 1)
      .padStart(
        2,
        '0'
      ) +

      '</span>' +

      '<span class="track-name">' +

      escapeHTML(
        t.titulo
      ) +

      '</span>' +

      '<span class="track-time">MP3</span>' +

      '</button>'

    )
    .join('');


    openPanel(

      'Music',

      '<p class="panel-desc">' +

      'Where words fail, music speaks, because the music is the shorthand of emotion.' +

      '</p>' +


      '<div class="music-status-panel">' +

      escapeHTML(
        audioStatus?.textContent ||
        'AUDIO // STANDBY'
      ) +

      '</div>' +


      '<div class="music-controls">' +

      '<button class="big-player-btn" data-action="prev" type="button">‹</button>' +

      '<button class="big-player-btn" data-action="play" id="panelPlay" type="button">▶</button>' +

      '<button class="big-player-btn" data-action="next" type="button">›</button>' +

      '</div>' +


      '<div class="track-list">' +

      list +

      '</div>'

    );


    /*
     * Garantía adicional:
     * después de crear los botones,
     * sincronizamos inmediatamente.
     */

    refreshTrackButtons();

    updatePlayUI();

  }


  /* =======================================================
   *  GALLERY
   * ======================================================= */

  function renderGallery() {

    const items =
    CONFIG.galeria
    .map(
      (g, i) =>

      '<button class="gallery-item" data-gallery="' +
      i +
      '" type="button">' +

      '<img src="' +
      escapeHTML(g.archivo) +
      '" alt="' +
      escapeHTML(g.titulo) +
      '" loading="lazy" onerror="imageFallback(this)">' +

      '</button>'

    )
    .join('');


    openPanel(

      'Gallery',

      '<p class="panel-desc">' +

      '"Give it some more time for this landscape to grow used to your breath and your presence. For me, too."' +

      '</p>' +

      '<div class="gallery-grid">' +

      items +

      '</div>',

      false

    );

  }


  function openGallery(i) {

    if (!CONFIG.galeria[i]) {
      return;
    }


    let v =
    $('#galleryViewer');


    if (!v) {

      v =
      document.createElement(
        'div'
      );

      v.id =
      'galleryViewer';

        v.className =
        'gallery-viewer';


      v.innerHTML =

      '<img id="viewerImage" alt="">' +

      '<button class="close-btn" type="button" aria-label="Cerrar">×</button>';


      document.body.appendChild(v);


      v.addEventListener(
        'click',
        e => {

          if (
            e.target === v ||
            e.target.classList.contains(
              'close-btn'
            )
          ) {

            v.classList.remove(
              'show'
            );

          }

        }
      );

    }


    $('#viewerImage', v).src =
    CONFIG.galeria[i].archivo;


    $('#viewerImage', v).alt =
    CONFIG.galeria[i].titulo;


    v.classList.add(
      'show'
    );

  }


  /* =======================================================
   *  GAMES
   * ======================================================= */

  function renderGames() {

    const cards =
    CONFIG.juegos
    .map(
      g =>

      '<article class="game-card">' +

      '<img class="game-media" src="' +
      escapeHTML(g.media) +
      '" alt="' +
      escapeHTML(g.nombre) +
      '" onerror="this.style.display=\'none\'">' +

      '<div class="game-body">' +

      '<div class="game-title">' +

      escapeHTML(g.nombre) +

      '</div>' +

      '<div class="game-quote">“' +

      escapeHTML(g.frase) +

      '”' +

      (
        g.autor
        ? '<span class="game-author">— ' +
        escapeHTML(g.autor) +
        '</span>'
        : ''
      ) +

      '</div>' +

      '</div>' +

      '</article>'

    )
    .join('');


    openPanel(

      'Games',

      '<p class="panel-desc">' +

      'Gaming is my favorite way to relax and have a good time. Lets play and have fun!' +

      '</p>' +

      '<div class="games">' +

      cards +

      '</div>',

      false

    );

  }


  /* =======================================================
   *  STEAM
   * ======================================================= */

  function renderSteam() {

    const url =
    safeUrl(
      CONFIG.perfil.steam
    );


    openPanel(

      'Steam',

      '<p class="panel-desc">' +

      'STEAM // PROFILE' +

      '</p>' +


      '<video class="steam-video" autoplay muted loop playsinline preload="metadata">' +

      '<source src="' +

      escapeHTML(
        CONFIG.steamVideo
      ) +

      '" type="video/mp4">' +

      '</video>' +


      '<div class="steam-box">' +

      '<div class="panel-kicker">' +

      'STEAM PROFILE' +

      '</div>' +


      '<p class="steam-link">' +

      escapeHTML(
        CONFIG.perfil.steam
      ) +

      '</p>' +


      '<a class="external-btn" href="' +

      escapeHTML(url) +

      '" target="_blank" rel="noopener noreferrer">' +

      ' ↗' +

      '</a>' +

      '</div>'

    );

  }


  /* =======================================================
   *  ABOUT
   * ======================================================= */

  function renderAbout() {

    const render =
    CONFIG.perfil.aboutRender ||
    'assets/about/nece-render.png';


      /*
       * El render aparece entre INFO y ESTADISTICAS
       * finalmente la MISMA estructura de
       * estadísticas utilizada por Friends.
       */

      const aboutHtml =

      '<div class="about-profile-panel">' +


      /* ---------- ABOUT INFO ---------- */

      '<div class="about-info-only">' +

      '<p class="panel-desc">' +

      '"I think real love is found in quiet daily sacrifices and companionship, and showing up when it counts..."' +

      '</p>' +


      '<div class="about-list">' +


      '<div class="about-row">' +

      '<span>Name</span>' +

      '<strong>Chris クリス</strong>' +

      '</div>' +


      '<div class="about-row">' +

      '<span>Main</span>' +

      '<strong>Yi Xuan 🐦‍⬛</strong>' +

      '</div>' +


      '<div class="about-row">' +

      '<span>Country</span>' +

      '<strong>Argentina 🇦🇷</strong>' +

      '</div>' +

      '<div class="about-row">' +

      '<span>Sing</span>' +

      '<strong>Capricornio ♑</strong>' +

      '</div>' +

      '<div class="about-row">' +

      '<span>Birthday</span>' +

      '<strong>1th Enero 🎉</strong>' +

      '</div>' +


      '<div class="about-row">' +

      '<span>Relationship</span>' +

      '<strong>Married 💫</strong>' +

      '</div>' +


      '<div class="about-row">' +

      '<span>Status</span>' +

      '<strong>Alive for moment ☠️</strong>' +

      '</div>' +


      '<div class="about-row">' +

      '<span>Game</span>' +

      '<strong>Zenless Zone Zero 🎮</strong>' +

      '</div>' +


      '<div class="about-row">' +

      '<span>Style</span>' +

      '<strong>Dark / Elegant ♱</strong>' +

      '</div>' +


      '</div>' +

      '</div>' +

      /* ---------- RENDER ---------- */

      '<div class="about-render-panel">' +

      '<div class="about-render-stars">' +

      '✦　·　✧　·　✦' +

      '</div>' +


      '<div class="about-render-frame">' +

      '<div class="about-render-glow"></div>' +

      '<div class="about-render-orbit orbit-a"></div>' +

      '<div class="about-render-orbit orbit-b"></div>' +


      '<img class="about-render" src="' +

      escapeHTML(render) +

      '" alt="About render" onerror="this.style.display=\'none\'">' +

      '</div>' +

      '</div>' +


      /* ---------- AGENT HEADER ---------- */

      '<div class="signature-head">' +

      '<span>AGENT PROFILE</span>' +

      '<strong>Lv. ' +

      escapeHTML(
        CONFIG.perfil.nivel ||
        1
      ) +

      '</strong>' +

      '<em>' +

      escapeHTML(
        CONFIG.perfil.rol ||
        'Agent'
      ) +

      '</em>' +

      '</div>' +


      /* ---------- STATS ---------- */

      '<div class="stats-panel">' +

      '<div class="stats-tabs">' +

      '<b>Base Stats</b>' +

      '<span>Skills</span>' +

      '<span>Equipment</span>' +

      '</div>' +


      '<div class="stats-grid">' +

      statsRows(
        CONFIG.perfil
      ) +

      '</div>' +

      '</div>' +


      '</div>';


      openPanel(
        'About me:',
        aboutHtml,
        false
      );

  }


  /* =======================================================
   *  PANEL ACTIONS
   * ======================================================= */

  const panelActions = {

    friends:
    renderFriends,

    music:
    renderMusic,

    gallery:
    renderGallery,

    games:
    renderGames,

    steam:
    renderSteam,

    about:
    renderAbout

  };


  function openNamedPanel(name) {

    (
      panelActions[name] ||
      renderAbout
    )();

  }


  window.openNamedPanel =
  openNamedPanel;


  /* =======================================================
   *  ÚNICO LISTENER PARA PANELES
   * ======================================================= */

  document.addEventListener(
    'click',
    e => {

      /* ---------- MENU ---------- */

      const menu =
      e.target.closest?.(
        '.menu button[data-panel]'
      );


      if (menu) {

        e.preventDefault();
        e.stopPropagation();


        openNamedPanel(
          menu.dataset.panel
        );


        return;

      }


      /* ---------- FRIEND ---------- */

      const friend =
      e.target.closest?.(
        '[data-friend]'
      );


      if (friend) {

        e.preventDefault();
        e.stopPropagation();


        historyStack.push(
          panelContent.innerHTML
        );


        renderFriendSignature(
          Number(
            friend.dataset.friend
          )
        );


        return;

      }


      /* ---------- TRACK ---------- */

      const track =
      e.target.closest?.(
        '[data-track]'
      );


      if (track) {

        e.preventDefault();
        e.stopPropagation();


        const trackIndex =
        Number(
          track.dataset.track
        );


        /*
         * loadTrack() ya actualiza
         * refreshTrackButtons().
         */

        loadTrack(
          trackIndex,
          true
        );


        return;

      }


      /* ---------- GALLERY ---------- */

      const gallery =
      e.target.closest?.(
        '[data-gallery]'
      );


      if (gallery) {

        e.preventDefault();
        e.stopPropagation();


        openGallery(
          Number(
            gallery.dataset.gallery
          )
        );


        return;

      }


      /* ---------- ACTION ---------- */

      const action =
      e.target.closest?.(
        '[data-action]'
      );


      if (action) {

        e.preventDefault();
        e.stopPropagation();


        const a =
        action.dataset.action;


        if (a === 'back') {

          goBack();

        }

        else if (a === 'prev') {

          previousTrack();

        }

        else if (a === 'next') {

          nextTrack();

        }

        else if (a === 'play') {

          togglePlay();

        }

      }

    }
  );


  /* =======================================================
   *  CERRAR PANEL
   * ======================================================= */

  closePanel?.addEventListener(
    'click',
    closeCurrentPanel
  );


  backdrop?.addEventListener(
    'click',
    closeCurrentPanel
  );


  /* =======================================================
   *  ESCAPE
   * ======================================================= */

  document.addEventListener(
    'keydown',
    e => {

      if (e.key !== 'Escape') {
        return;
      }


      const viewer =
      $('#galleryViewer.show');


      if (viewer) {

        viewer.classList.remove(
          'show'
        );

        return;

      }


      if (
        sidePanel?.classList.contains(
          'open'
        )
      ) {

        closeCurrentPanel();

      }

    }
  );


  /* =======================================================
   *  AUDIO CONTROLS
   * ======================================================= */

  playPause?.addEventListener(
    'click',
    togglePlay
  );


  prevTrack?.addEventListener(
    'click',
    previousTrack
  );


  nextTrackBtn?.addEventListener(
    'click',
    nextTrack
  );


  muteBtn?.addEventListener(
    'click',
    () => {

      if (!audio) {
        return;
      }


      audio.muted =
      !audio.muted;


      muteBtn.textContent =
      audio.muted
      ? '●'
      : '◒';

    }
  );


  /* ---------- AUDIO PLAY ---------- */

  audio?.addEventListener(
    'play',
    () => {

      updatePlayUI();


      setAudioStatus(
        'AUDIO // ONLINE',
        'ok'
      );


      /*
       * Seguridad adicional:
       * aunque play() se dispare por
       * cualquier motivo, mantenemos
       * sincronizado el botón.
       */

      refreshTrackButtons();

    }
  );


  /* ---------- AUDIO PAUSE ---------- */

  audio?.addEventListener(
    'pause',
    updatePlayUI
  );


  /*
   * ---------- AUDIO ENDED ----------
   *
   * Cuando termina una canción,
   * nextTrack() llama a loadTrack(),
   * y loadTrack() actualiza automáticamente
   * el botón dorado.
   */

  audio?.addEventListener(
    'ended',
    () => {

      nextTrack();

    }
  );


  /* ---------- AUDIO ERROR ---------- */

  audio?.addEventListener(
    'error',
    () => {

      updatePlayUI();


      setAudioStatus(
        'AUDIO // ' +
        audioErrorText(
          audio.error
        ),
        'error'
      );

    }
  );


  /* ---------- PROGRESO ---------- */

  audio?.addEventListener(
    'timeupdate',
    () => {

      if (
        progress &&
        Number.isFinite(
          audio.duration
        ) &&
        audio.duration > 0
      ) {

        progress.value =
        audio.currentTime /
        audio.duration *
        100;

      }

    }
  );


  progress?.addEventListener(
    'input',
    () => {

      if (
        audio &&
        Number.isFinite(
          audio.duration
        ) &&
        audio.duration > 0
      ) {

        audio.currentTime =
        Number(
          progress.value
        ) /
        100 *
        audio.duration;

      }

    }
  );


  /* =======================================================
   *  EFECTO PERSONAJE
   * ======================================================= */

  if (
    hero &&
    character &&
    stage &&
    window
    .matchMedia(
      '(pointer:fine)'
    )
    .matches
  ) {

    hero.addEventListener(
      'pointermove',
      e => {

        const r =
        hero.getBoundingClientRect();


        const x =
        (
          e.clientX -
          r.left
        ) /
        r.width -
        0.5;


        const y =
        (
          e.clientY -
          r.top
        ) /
        r.height -
        0.5;


        character.style.setProperty(
          '--mx',
          (
            x * 12
          ).toFixed(1) +
          'px'
        );


        character.style.setProperty(
          '--my',
          (
            12 +
            y * 8
          ).toFixed(1) +
          'px'
        );


        stage.style.transform =
        'translateZ(0)';

      }
    );


    hero.addEventListener(
      'pointerleave',
      () => {

        character.style.setProperty(
          '--mx',
          '0px'
        );


        character.style.setProperty(
          '--my',
          '12px'
        );

      }
    );

  }


  /* =======================================================
   *  PARTICULAS
   * ======================================================= */

  if (
    canvas &&
    ctx
  ) {

    let particles = [];

    let W = 0;

    let H = 0;


    function resizeCanvas() {

      const d =
      Math.min(
        window.devicePixelRatio ||
        1,
        2
      );


      W =
      innerWidth;

      H =
      innerHeight;


      canvas.width =
      W * d;

      canvas.height =
      H * d;


      canvas.style.width =
      W + 'px';

      canvas.style.height =
      H + 'px';


      ctx.setTransform(
        d,
        0,
        0,
        d,
        0,
        0
      );


      const count =
      Math.min(
        105,
        Math.floor(
          W * H / 15000
        )
      );


      particles =
      Array.from(
        {
          length: count
        },
        () => ({

          x:
          Math.random() * W,

               y:
               Math.random() * H,

               r:
               0.5 +
               Math.random() * 1.2,

               vx:
               (
                 Math.random() -
                 0.5
               ) *
               0.18,

               vy:
               -0.12 -
               Math.random() *
               0.28,

               a:
               0.15 +
               Math.random() *
               0.55,

               phase:
               Math.random() *
               Math.PI *
               2

        })
      );

    }


    function particleLoop(t) {

      ctx.clearRect(
        0,
        0,
        W,
        H
      );


      for (const p of particles) {

        p.x +=
        p.vx +
        Math.sin(
          t * 0.0005 +
          p.phase
        ) *
        0.04;


        p.y +=
        p.vy;


        if (p.y < -5) {

          p.y =
          H + 5;

          p.x =
          Math.random() * W;

        }


        if (p.x < -5) {
          p.x = W + 5;
        }


        if (p.x > W + 5) {
          p.x = -5;
        }


        const alpha =
        p.a *
        (
          0.55 +
          0.45 *
          Math.sin(
            t * 0.001 +
            p.phase
          )
        );


        ctx.beginPath();


        ctx.arc(
          p.x,
          p.y,
          p.r,
          0,
          Math.PI * 2
        );


        ctx.fillStyle =
        `rgba(225,193,135,${Math.max(
          0.03,
          alpha
        )})`;


        ctx.fill();

      }


      requestAnimationFrame(
        particleLoop
      );

    }


    resizeCanvas();


    window.addEventListener(
      'resize',
      resizeCanvas
    );


    requestAnimationFrame(
      particleLoop
    );

  }


  /* =======================================================
   *  AUDIO INICIAL
   * ======================================================= */

  loadTrack(
    0,
    false
  );


  updatePlayUI();

}


/* =========================================================
 *  BOOT V27
 * ========================================================= */

function boot() {

  /*
   * LOGIN primero.
   * Se mantiene completamente independiente
   * del resto del Xatspace.
   */

  setupLogin();


  try {

    init();

  } catch (error) {

    console.error(
      '[NECE V27] Error durante init():',
                  error
    );

  }

}


/* =========================================================
 *  DOM READY
 * ========================================================= */

if (
  document.readyState ===
  'loading'
) {

  document.addEventListener(
    'DOMContentLoaded',
    boot,
    {
      once: true
    }
  );

} else {

  boot();

}
