  const retasData = {
    1: { started: true, organizer: { name: 'Erick Mconnor', initial: 'E' }, club: 'Padel Center Norte · Cancha 3', hora: '10:00', rondas: 7, duracion: '2h', elo: 1534, rey: { name: 'Edgar Villaseñor', elo: 1589 }, players: [{ name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Erick Mconnor', elo: 1534, isOrganizer: true }, { name: 'Edgar Villaseñor', elo: 1589, isRey: true }, { name: 'Alfred Mendez', elo: 1543 }, { name: 'Luis Olmedo', elo: 1512 }, { name: 'Efrén Camacho', elo: 1465 }, { name: 'Mary Petrie', elo: 1478 }], waitlist: [] },
    2: { started: false, organizer: { name: 'Alfred Mendez', initial: 'A' }, club: 'Padel Center Norte · Cancha 2', hora: '18:00', rondas: 6, duracion: '1.5h', elo: 1512, rey: { name: 'Alfred Mendez', elo: 1543 }, players: [{ name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Alfred Mendez', elo: 1543, isOrganizer: true, isRey: true }, { name: 'Erick Mconnor', elo: 1487 }, { name: 'Luis Olmedo', elo: 1512 }, { name: 'Efrén Camacho', elo: 1465 }, { name: 'Juan C. Quintero', elo: 1445 }, { name: 'Alejandro Quintana', elo: 1421 }] },
    3: { started: false, organizer: { name: 'Alejandro Quintana', initial: 'A' }, club: 'Padel Center Sur · Cancha 1', hora: '20:00', rondas: 5, duracion: '1.5h', elo: 1467, rey: { name: 'Luis Olmedo', elo: 1512 }, players: [{ name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Alejandro Quintana', elo: 1421, isOrganizer: true }, { name: 'Luis Olmedo', elo: 1512, isRey: true }] },
    4: { started: false, organizer: { name: 'Luis Olmedo', initial: 'L' }, club: 'Club Los Pinos · Cancha 1', hora: '10:00', rondas: 7, duracion: '2h', elo: 1545, rey: { name: 'Mary Petrie', elo: 1621 }, players: [{ name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Luis Olmedo', elo: 1512, isOrganizer: true }, { name: 'Mary Petrie', elo: 1621, isRey: true }, { name: 'Edgar Villaseñor', elo: 1589 }, { name: 'Alfred Mendez', elo: 1543 }, { name: 'Erick Mconnor', elo: 1487 }, { name: 'Efrén Camacho', elo: 1465 }] },
    5: { started: false, organizer: { name: 'Efrén Camacho', initial: 'E' }, club: 'Club Los Pinos · Cancha 2', hora: '11:00', rondas: 6, duracion: '1.5h', elo: 1478, rey: { name: 'Erick Mconnor', elo: 1487 }, players: [{ name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Disponible', elo: null, empty: true }, { name: 'Efrén Camacho', elo: 1465, isOrganizer: true }, { name: 'Erick Mconnor', elo: 1487, isRey: true }, { name: 'Alejandro Quintana', elo: 1421 }, { name: 'Juan C. Quintero', elo: 1445 }] },
    6: { started: false, organizer: { name: 'Pedro Sánchez', initial: 'P' }, club: 'Club Los Pinos · Cancha 3', hora: '11:00', rondas: 7, duracion: '2h', elo: 1456, rey: { name: 'Raúl Mendoza', elo: 1498 }, players: [{ name: 'Pedro Sánchez', elo: 1432, isOrganizer: true }, { name: 'Efrén Camacho', elo: 1465 }, { name: 'Alejandro Quintana', elo: 1421 }, { name: 'Juan C. Quintero', elo: 1445 }, { name: 'Rosa García', elo: 1423 }, { name: 'Raúl Mendoza', elo: 1498, isRey: true }, { name: 'Diana López', elo: 1456 }, { name: 'Fernando Ruiz', elo: 1478 }], waitlist: [{ name: 'Sofía Herrera', elo: 1412 }] },
    7: { started: true, organizer: { name: 'Carlos Test', initial: 'C' }, club: 'TEST · Ronda 7 en vivo', hora: '09:00', rondas: 7, duracion: '2h', elo: 1500, rey: { name: 'Ana Torres', elo: 1580 }, players: [{ name: 'Ana Torres', elo: 1580, isRey: true, total: 58 }, { name: 'Carlos Test', elo: 1520, isOrganizer: true, total: 52 }, { name: 'Mario Gómez', elo: 1510, total: 47 }, { name: 'Laura Díaz', elo: 1490, total: 42 }, { name: 'Pedro Ruiz', elo: 1470, total: 38 }, { name: 'Sofia Herrera', elo: 1450, total: 35 }, { name: 'Juan López', elo: 1430, total: 31 }, { name: 'María García', elo: 1410, total: 28 }], waitlist: [] }
  };

  const matchesData = {
    1: {
      totalRounds: 7,
      currentRound: 3,
      courts: 2,
      rounds: {
        1: {
          status: 'completed',
          matches: [
            { court: 1, time: '10:00 - 10:15', team1: [{ name: 'Erick Mconnor', elo: 1534, initial: 'E' }, { name: 'Edgar Villaseñor', elo: 1589, initial: 'E' }], team2: [{ name: 'Alfred Mendez', elo: 1543, initial: 'A' }, { name: 'Luis Olmedo', elo: 1512, initial: 'L' }], score: { team1: 6, team2: 4 }, winner: 1, eloChanges: { team1: +8, team2: -8 } },
            { court: 2, time: '10:00 - 10:15', team1: [{ name: 'Efrén Camacho', elo: 1465, initial: 'E' }, { name: 'Mary Petrie', elo: 1478, initial: 'M' }], team2: [{ name: 'Alejandro Quintana', elo: 1421, initial: 'A' }, { name: 'Juan C. Quintero', elo: 1445, initial: 'J' }], score: { team1: 4, team2: 6 }, winner: 2, eloChanges: { team1: -6, team2: +6 } }
          ]
        },
        2: {
          status: 'completed',
          matches: [
            { court: 1, time: '10:20 - 10:35', team1: [{ name: 'Edgar Villaseñor', elo: 1589, initial: 'E' }, { name: 'Alfred Mendez', elo: 1543, initial: 'A' }], team2: [{ name: 'Efrén Camacho', elo: 1465, initial: 'E' }, { name: 'Juan C. Quintero', elo: 1445, initial: 'J' }], score: { team1: 6, team2: 2 }, winner: 1, eloChanges: { team1: +5, team2: -5 } },
            { court: 2, time: '10:20 - 10:35', team1: [{ name: 'Erick Mconnor', elo: 1534, initial: 'E' }, { name: 'Mary Petrie', elo: 1478, initial: 'M' }], team2: [{ name: 'Luis Olmedo', elo: 1512, initial: 'L' }, { name: 'Alejandro Quintana', elo: 1421, initial: 'A' }], score: { team1: 5, team2: 6 }, winner: 2, eloChanges: { team1: -7, team2: +7 } }
          ]
        },
        3: {
          status: 'in-progress',
          matches: [
            { court: 1, time: '10:40 - 10:55', team1: [{ name: 'Edgar Villaseñor', elo: 1589, initial: 'E' }, { name: 'Luis Olmedo', elo: 1512, initial: 'L' }], team2: [{ name: 'Erick Mconnor', elo: 1534, initial: 'E' }, { name: 'Efrén Camacho', elo: 1465, initial: 'E' }], score: { team1: 3, team2: 2 }, winner: null, eloChanges: null },
            { court: 2, time: '10:40 - 10:55', team1: [{ name: 'Alfred Mendez', elo: 1543, initial: 'A' }, { name: 'Alejandro Quintana', elo: 1421, initial: 'A' }], team2: [{ name: 'Mary Petrie', elo: 1478, initial: 'M' }, { name: 'Juan C. Quintero', elo: 1445, initial: 'J' }], score: { team1: 4, team2: 4 }, winner: null, eloChanges: null }
          ]
        },
        4: {
          status: 'pending',
          matches: [
            { court: 1, time: '11:00 - 11:15', team1: [{ name: 'Erick Mconnor', elo: 1534, initial: 'E' }, { name: 'Alfred Mendez', elo: 1543, initial: 'A' }], team2: [{ name: 'Edgar Villaseñor', elo: 1589, initial: 'E' }, { name: 'Alejandro Quintana', elo: 1421, initial: 'A' }], score: null, winner: null, eloChanges: null },
            { court: 2, time: '11:00 - 11:15', team1: [{ name: 'Luis Olmedo', elo: 1512, initial: 'L' }, { name: 'Mary Petrie', elo: 1478, initial: 'M' }], team2: [{ name: 'Efrén Camacho', elo: 1465, initial: 'E' }, { name: 'Juan C. Quintero', elo: 1445, initial: 'J' }], score: null, winner: null, eloChanges: null }
          ]
        },
        5: { 
          status: 'pending', 
          matches: [
            { court: 1, time: '11:20 - 11:35', team1: [{ name: 'Erick Mconnor', elo: 1534, initial: 'E' }, { name: 'Edgar Villaseñor', elo: 1589, initial: 'E' }], team2: [{ name: 'Luis Olmedo', elo: 1512, initial: 'L' }, { name: 'Efrén Camacho', elo: 1465, initial: 'E' }], score: null, winner: null, eloChanges: null },
            { court: 2, time: '11:20 - 11:35', team1: [{ name: 'Alfred Mendez', elo: 1543, initial: 'A' }, { name: 'Mary Petrie', elo: 1478, initial: 'M' }], team2: [{ name: 'Alejandro Quintana', elo: 1421, initial: 'A' }, { name: 'Juan C. Quintero', elo: 1445, initial: 'J' }], score: null, winner: null, eloChanges: null }
          ]
        },
        6: { 
          status: 'pending', 
          matches: [
            { court: 1, time: '11:40 - 11:55', team1: [{ name: 'Edgar Villaseñor', elo: 1589, initial: 'E' }, { name: 'Efrén Camacho', elo: 1465, initial: 'E' }], team2: [{ name: 'Alfred Mendez', elo: 1543, initial: 'A' }, { name: 'Mary Petrie', elo: 1478, initial: 'M' }], score: null, winner: null, eloChanges: null },
            { court: 2, time: '11:40 - 11:55', team1: [{ name: 'Erick Mconnor', elo: 1534, initial: 'E' }, { name: 'Luis Olmedo', elo: 1512, initial: 'L' }], team2: [{ name: 'Alejandro Quintana', elo: 1421, initial: 'A' }, { name: 'Juan C. Quintero', elo: 1445, initial: 'J' }], score: null, winner: null, eloChanges: null }
          ]
        },
        7: { 
          status: 'pending', 
          matches: [
            { court: 1, time: '12:00 - 12:15', team1: [{ name: 'Erick Mconnor', elo: 1534, initial: 'E' }, { name: 'Alejandro Quintana', elo: 1421, initial: 'A' }], team2: [{ name: 'Edgar Villaseñor', elo: 1589, initial: 'E' }, { name: 'Alfred Mendez', elo: 1543, initial: 'A' }], score: null, winner: null, eloChanges: null },
            { court: 2, time: '12:00 - 12:15', team1: [{ name: 'Luis Olmedo', elo: 1512, initial: 'L' }, { name: 'Efrén Camacho', elo: 1465, initial: 'E' }], team2: [{ name: 'Mary Petrie', elo: 1478, initial: 'M' }, { name: 'Juan C. Quintero', elo: 1445, initial: 'J' }], score: null, winner: null, eloChanges: null }
          ]
        }
      }
    },
    2: { totalRounds: 6, currentRound: 1, courts: 2, rounds: { 1: { status: 'pending', matches: [] }, 2: { status: 'pending', matches: [] }, 3: { status: 'pending', matches: [] }, 4: { status: 'pending', matches: [] }, 5: { status: 'pending', matches: [] }, 6: { status: 'pending', matches: [] } } },
    3: { totalRounds: 5, currentRound: 1, courts: 1, rounds: { 1: { status: 'pending', matches: [] }, 2: { status: 'pending', matches: [] }, 3: { status: 'pending', matches: [] }, 4: { status: 'pending', matches: [] }, 5: { status: 'pending', matches: [] } } },
    4: { totalRounds: 7, currentRound: 1, courts: 2, rounds: { 1: { status: 'pending', matches: [] }, 2: { status: 'pending', matches: [] }, 3: { status: 'pending', matches: [] }, 4: { status: 'pending', matches: [] }, 5: { status: 'pending', matches: [] }, 6: { status: 'pending', matches: [] }, 7: { status: 'pending', matches: [] } } },
    5: { totalRounds: 6, currentRound: 1, courts: 2, rounds: { 1: { status: 'pending', matches: [] }, 2: { status: 'pending', matches: [] }, 3: { status: 'pending', matches: [] }, 4: { status: 'pending', matches: [] }, 5: { status: 'pending', matches: [] }, 6: { status: 'pending', matches: [] } } },
    6: { totalRounds: 5, currentRound: 1, courts: 1, rounds: { 1: { status: 'pending', matches: [] }, 2: { status: 'pending', matches: [] }, 3: { status: 'pending', matches: [] }, 4: { status: 'pending', matches: [] }, 5: { status: 'pending', matches: [] } } },
    7: { 
      totalRounds: 7, 
      currentRound: 7, 
      courts: 2, 
      rounds: { 
        1: { 
          status: 'completed', 
          matches: [
            { court: 1, time: '09:00 - 09:15', team1: [{ name: 'Ana Torres', elo: 1580, initial: 'A' }, { name: 'Carlos Test', elo: 1520, initial: 'C' }], team2: [{ name: 'Mario Gómez', elo: 1510, initial: 'M' }, { name: 'Laura Díaz', elo: 1490, initial: 'L' }], score: { team1: 16, team2: 10 }, winner: 1, eloChanges: { team1: +8, team2: -8 } },
            { court: 2, time: '09:00 - 09:15', team1: [{ name: 'Pedro Ruiz', elo: 1470, initial: 'P' }, { name: 'Sofia Herrera', elo: 1450, initial: 'S' }], team2: [{ name: 'Juan López', elo: 1430, initial: 'J' }, { name: 'María García', elo: 1410, initial: 'M' }], score: { team1: 12, team2: 14 }, winner: 2, eloChanges: { team1: -6, team2: +6 } }
          ]
        },
        2: { 
          status: 'completed', 
          matches: [
            { court: 1, time: '09:20 - 09:35', team1: [{ name: 'Ana Torres', elo: 1580, initial: 'A' }, { name: 'Mario Gómez', elo: 1510, initial: 'M' }], team2: [{ name: 'Pedro Ruiz', elo: 1470, initial: 'P' }, { name: 'Juan López', elo: 1430, initial: 'J' }], score: { team1: 14, team2: 8 }, winner: 1, eloChanges: { team1: +7, team2: -7 } },
            { court: 2, time: '09:20 - 09:35', team1: [{ name: 'Carlos Test', elo: 1520, initial: 'C' }, { name: 'Laura Díaz', elo: 1490, initial: 'L' }], team2: [{ name: 'Sofia Herrera', elo: 1450, initial: 'S' }, { name: 'María García', elo: 1410, initial: 'M' }], score: { team1: 16, team2: 6 }, winner: 1, eloChanges: { team1: +5, team2: -5 } }
          ]
        },
        3: { 
          status: 'completed', 
          matches: [
            { court: 1, time: '09:40 - 09:55', team1: [{ name: 'Ana Torres', elo: 1580, initial: 'A' }, { name: 'Laura Díaz', elo: 1490, initial: 'L' }], team2: [{ name: 'Carlos Test', elo: 1520, initial: 'C' }, { name: 'Pedro Ruiz', elo: 1470, initial: 'P' }], score: { team1: 10, team2: 12 }, winner: 2, eloChanges: { team1: -6, team2: +6 } },
            { court: 2, time: '09:40 - 09:55', team1: [{ name: 'Mario Gómez', elo: 1510, initial: 'M' }, { name: 'Sofia Herrera', elo: 1450, initial: 'S' }], team2: [{ name: 'Juan López', elo: 1430, initial: 'J' }, { name: 'María García', elo: 1410, initial: 'M' }], score: { team1: 14, team2: 8 }, winner: 1, eloChanges: { team1: +5, team2: -5 } }
          ]
        },
        4: { 
          status: 'completed', 
          matches: [
            { court: 1, time: '10:00 - 10:15', team1: [{ name: 'Ana Torres', elo: 1580, initial: 'A' }, { name: 'Pedro Ruiz', elo: 1470, initial: 'P' }], team2: [{ name: 'Mario Gómez', elo: 1510, initial: 'M' }, { name: 'Juan López', elo: 1430, initial: 'J' }], score: { team1: 16, team2: 12 }, winner: 1, eloChanges: { team1: +6, team2: -6 } },
            { court: 2, time: '10:00 - 10:15', team1: [{ name: 'Carlos Test', elo: 1520, initial: 'C' }, { name: 'Sofia Herrera', elo: 1450, initial: 'S' }], team2: [{ name: 'Laura Díaz', elo: 1490, initial: 'L' }, { name: 'María García', elo: 1410, initial: 'M' }], score: { team1: 10, team2: 14 }, winner: 2, eloChanges: { team1: -7, team2: +7 } }
          ]
        },
        5: { 
          status: 'completed', 
          matches: [
            { court: 1, time: '10:20 - 10:35', team1: [{ name: 'Ana Torres', elo: 1580, initial: 'A' }, { name: 'Sofia Herrera', elo: 1450, initial: 'S' }], team2: [{ name: 'Carlos Test', elo: 1520, initial: 'C' }, { name: 'Juan López', elo: 1430, initial: 'J' }], score: { team1: 12, team2: 14 }, winner: 2, eloChanges: { team1: -8, team2: +8 } },
            { court: 2, time: '10:20 - 10:35', team1: [{ name: 'Mario Gómez', elo: 1510, initial: 'M' }, { name: 'Laura Díaz', elo: 1490, initial: 'L' }], team2: [{ name: 'Pedro Ruiz', elo: 1470, initial: 'P' }, { name: 'María García', elo: 1410, initial: 'M' }], score: { team1: 16, team2: 10 }, winner: 1, eloChanges: { team1: +6, team2: -6 } }
          ]
        },
        6: { 
          status: 'completed', 
          matches: [
            { court: 1, time: '10:40 - 10:55', team1: [{ name: 'Ana Torres', elo: 1580, initial: 'A' }, { name: 'Juan López', elo: 1430, initial: 'J' }], team2: [{ name: 'Mario Gómez', elo: 1510, initial: 'M' }, { name: 'Pedro Ruiz', elo: 1470, initial: 'P' }], score: { team1: 14, team2: 16 }, winner: 2, eloChanges: { team1: -5, team2: +5 } },
            { court: 2, time: '10:40 - 10:55', team1: [{ name: 'Carlos Test', elo: 1520, initial: 'C' }, { name: 'María García', elo: 1410, initial: 'M' }], team2: [{ name: 'Laura Díaz', elo: 1490, initial: 'L' }, { name: 'Sofia Herrera', elo: 1450, initial: 'S' }], score: { team1: 12, team2: 10 }, winner: 1, eloChanges: { team1: +7, team2: -7 } }
          ]
        },
        7: { 
          status: 'in-progress', 
          matches: [
            { court: 1, time: '11:00 - 11:15', team1: [{ name: 'Ana Torres', elo: 1580, initial: 'A' }, { name: 'María García', elo: 1410, initial: 'M' }], team2: [{ name: 'Carlos Test', elo: 1520, initial: 'C' }, { name: 'Mario Gómez', elo: 1510, initial: 'M' }], score: { team1: 16, team2: 14 }, winner: 1, eloChanges: { team1: +5, team2: -5 } },
            { court: 2, time: '11:00 - 11:15', team1: [{ name: 'Laura Díaz', elo: 1490, initial: 'L' }, { name: 'Pedro Ruiz', elo: 1470, initial: 'P' }], team2: [{ name: 'Sofia Herrera', elo: 1450, initial: 'S' }, { name: 'Juan López', elo: 1430, initial: 'J' }], score: { team1: 3, team2: 2 }, winner: null, eloChanges: null }
          ]
        }
      }
    }
  };

  const $ = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  const carousels = {
    activity: { el: 'activityCarousel', left: 'activityArrowLeft', right: 'activityArrowRight', scroll: 155 }
  };

  let currentRetaId = null;
  let currentRoundView = 1;

  function updateArrows(type) {
    const c = carousels[type], carousel = $(c.el), leftArrow = $(c.left), rightArrow = $(c.right);
    if (!carousel || !leftArrow || !rightArrow) return;
    const { scrollLeft, scrollWidth, clientWidth } = carousel, maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 10) { leftArrow.classList.remove('visible'); rightArrow.classList.remove('visible'); return; }
    leftArrow.classList.toggle('visible', scrollLeft > 10);
    rightArrow.classList.toggle('visible', scrollLeft < maxScroll - 10);
  }

  function scrollCarousel(type, dir) {
    const c = carousels[type];
    $(c.el).scrollLeft += dir === 'left' ? -c.scroll : c.scroll;
    setTimeout(() => updateArrows(type), 100);
  }

  function toggleRetasGlobal() {
    const section = $('retasSection');
    const btn = document.querySelector('#retasVerMas .ver-mas-btn');
    const isExpanded = section.classList.toggle('expanded');
    const allRetas = section.querySelectorAll('.reta-row');
    const remaining = allRetas.length - 3;
    
    btn.classList.toggle('expanded', isExpanded);
    btn.querySelector('span:first-child').textContent = isExpanded ? 'Ver menos' : `Más retas (${remaining})`;
    
    // Mostrar/ocultar retas y clubes según el estado
    applyRetasLimit();
  }

  function applyRetasLimit() {
    const section = $('retasSection');
    const isExpanded = section.classList.contains('expanded');
    const allRetas = section.querySelectorAll('.reta-row');
    const allClubs = section.querySelectorAll('.club-group');
    const limit = 3;
    
    let visibleCount = 0;
    let lastVisibleClub = null;
    
    allClubs.forEach(club => {
      const retas = club.querySelectorAll('.reta-row');
      const emptyState = club.querySelector('.empty-state');
      let clubHasVisibleRetas = false;
      
      // Resetear margin
      club.style.marginBottom = '';
      
      retas.forEach(reta => {
        if (isExpanded || visibleCount < limit) {
          reta.style.display = '';
          clubHasVisibleRetas = true;
          visibleCount++;
        } else {
          reta.style.display = 'none';
        }
      });
      
      // Ocultar club si no tiene retas visibles (excepto empty state)
      if (!clubHasVisibleRetas && !emptyState) {
        club.style.display = isExpanded ? '' : 'none';
      } else if (emptyState && !isExpanded && visibleCount >= limit) {
        // Ocultar clubs con empty state si no está expandido y ya hay 3 retas
        club.style.display = 'none';
      } else {
        club.style.display = '';
        lastVisibleClub = club;
      }
    });
    
    // Reducir margin del último club visible
    if (lastVisibleClub) {
      lastVisibleClub.style.cssText = 'margin-bottom: 10px !important; display: block;';
    }
    
    // Ocultar botón si hay 3 o menos retas
    const verMasBtn = $('retasVerMas');
    if (verMasBtn) {
      const remaining = allRetas.length - limit;
      if (remaining > 0) {
        verMasBtn.style.display = '';
        const btn = verMasBtn.querySelector('.ver-mas-btn');
        if (btn && !isExpanded) {
          btn.querySelector('span:first-child').textContent = `Más retas (${remaining})`;
        }
      } else {
        verMasBtn.style.display = 'none';
      }
    }
  }

  function openRetaModal(el) {
    const data = retasData[el.dataset.reta];
    if (!data) return;
    currentRetaId = parseInt(el.dataset.reta);
    $('modalOrgAvatar').textContent = data.organizer.initial;
    $('modalOrgName').textContent = data.organizer.name;
    
    // Formato: Club · jue 15 ene · 09:00
    const clubName = data.club.split('·')[0].trim();
    const today = new Date();
    const days = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const dayName = days[today.getDay()];
    const day = today.getDate();
    const monthName = months[today.getMonth()];
    const hora = data.hora || '10:00';
    $('modalLocation').innerHTML = `${clubName} · ${dayName} ${day} ${monthName} · ${hora}`;
    
    $('modalTime').textContent = data.hora;
    $('modalRounds').textContent = data.rondas;
    $('modalDuration').textContent = data.duracion;
    $('modalElo').textContent = data.elo;
    $('modalReyName').textContent = data.rey.name;
    $('modalReyElo').textContent = data.rey.elo;
    renderPlayersList(data.players, data.waitlist || []);
    updatePlayersCount(data.players);
    resetModalTabs();
    
    // Mostrar/ocultar footer según estado de la reta
    const isStarted = data.started;
    const modal = document.querySelector('.modal');
    const modalTabs = document.querySelector('.modal-tabs');
    const modalFooterStart = $('modalFooterStart');
    const playersSection = document.querySelector('.players-section');
    const matchesSection = $('matchesSection');
    
    // Agregar/quitar clase según estado
    if (isStarted) {
      modal.classList.add('reta-started');
      // Renderizar standings table para móvil y PC
      renderStandingsTable(currentRetaId);
    } else {
      modal.classList.remove('reta-started');
    }
    
    if (isStarted) {
      // Reta iniciada: mostrar tabs, ocultar botón iniciar
      modalTabs.classList.remove('hidden');
      modalFooterStart.classList.remove('show');
    } else {
      // Reta no iniciada: ocultar tabs, mostrar botón iniciar
      modalTabs.classList.add('hidden');
      modalFooterStart.classList.add('show');
      // Ocultar sección de partidos
      matchesSection.classList.remove('active');
      playersSection.classList.remove('hidden');
    }
    
    // Actualizar texto del botón según jugadores
    const filledPlayers = data.players.filter(p => !p.empty).length;
    const btnIniciar = $('btnIniciarReta');
    if (btnIniciar) {
      btnIniciar.innerHTML = `<span class="material-symbols-outlined">rocket_launch</span> Iniciar reta`;
      btnIniciar.disabled = filledPlayers < 4;
      btnIniciar.style.opacity = filledPlayers < 4 ? '0.5' : '1';
    }
    
    $('modalOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Actualizar estado de la pestaña de resultados
    updateResultsTabState();
  }

  function closeRetaModal() {
    $('modalOverlay').classList.remove('show');
    document.body.style.overflow = '';
  }

  function renderPlayersList(players, waitlist = []) {
    const emptySlots = players.filter(p => p.empty).length;
    const filledSlots = players.length - emptySlots;
    
    let html = players.map((p, i) => {
      if (p.empty) return '<div class="player-row empty" onclick="activateInput(this)"><span class="player-num">'+(i+1)+'</span><div class="player-avatar-modal">+</div><span class="player-name-modal">Disponible</span></div>';
      
      const classes = [p.isOrganizer && 'organizer', p.isRey && 'rey'].filter(Boolean).join(' ');
      const avatarBadge = p.isRey ? '<span class="avatar-badge">👑</span>' : (p.isOrganizer ? '<span class="avatar-badge">🔑</span>' : '');
      return '<div class="player-row '+classes+'" data-player-name="'+p.name+'" onclick="showPlayerToast(\''+p.name+'\')"><span class="player-num">'+(i+1)+'</span><div class="player-avatar-modal filled">'+p.name.charAt(0)+avatarBadge+'</div><span class="player-name-modal">'+p.name+'</span><span class="player-elo">'+p.elo+'</span><button class="btn-leave" onclick="event.stopPropagation(); openConfirmModal(this)">Baja</button></div>';
    }).join('');
    
    html += '<div class="players-header waitlist-header"><span class="players-title">Lista de espera</span><span class="players-count">' + waitlist.length + '</span></div>';
    html += '<div class="player-row empty waitlist-add" onclick="activateWaitlistInput(this)"><span class="player-num">+</span><div class="player-avatar-modal">+</div><span class="player-name-modal">Unirse a lista de espera</span></div>';
    
    if (waitlist.length === 0) {
      html += '<div class="waitlist-empty">No hay nadie más en espera</div>';
    } else {
      html += '<div class="waitlist-members">';
      html += waitlist.map((p, i) => {
        const canJoin = emptySlots > 0 && i < emptySlots;
        const actions = canJoin ? '<div class="waitlist-actions"><button class="btn-waitlist join" onclick="joinFromWaitlist(this, '+i+')">Unir</button><button class="btn-waitlist pass" onclick="passWaitlist(this, '+i+')">Paso</button></div>' : '';
        return '<div class="player-row waitlist'+(canJoin ? ' can-join' : '')+'" data-waitlist-index="'+i+'"><span class="player-num">'+(i+1)+'</span><div class="player-avatar-modal filled">'+p.name.charAt(0)+'</div><span class="player-name-modal">'+p.name+'</span>'+actions+'<span class="player-elo">'+p.elo+'</span><button class="btn-waitlist leave" onclick="leaveWaitlist(this, '+i+')">Baja</button></div>';
      }).join('');
      html += '</div>';
    }
    
    $('modalPlayersList').innerHTML = html;
  }

  function updatePlayersCount(players) {
    const total = players.length, filled = players.filter(p => !p.empty).length, empty = total - filled;
    $('modalPlayersCount').textContent = filled + ' / ' + total;
    const badge = $('modalUrgency');
    badge.textContent = empty === 0 ? 'Reta completa' : empty === 1 ? '¡Último lugar!' : 'Quedan ' + empty + ' lugares';
    badge.classList.toggle('critical', empty === 1);
  }

  function updateCountModal() {
    const all = $$('#modalPlayersList .player-row:not(.waitlist):not(.waitlist-add)');
    const filled = $$('#modalPlayersList .player-row:not(.empty):not(.input-mode):not(.waitlist):not(.waitlist-add)');
    const empty = all.length - filled.length;
    $('modalPlayersCount').textContent = filled.length + ' / ' + all.length;
    const badge = $('modalUrgency');
    badge.textContent = empty === 0 ? 'Reta completa' : empty === 1 ? '¡Último lugar!' : 'Quedan ' + empty + ' lugares';
    badge.classList.toggle('critical', empty === 1);
  }

  function updateEloAndReyModal() {
    const rows = $$('#modalPlayersList .player-row:not(.empty):not(.input-mode):not(.waitlist):not(.waitlist-add)');
    if (!rows.length) { $('modalElo').textContent = '-'; $('modalReyName').textContent = '-'; $('modalReyElo').textContent = '-'; return; }
    $$('#modalPlayersList .player-row.rey').forEach(r => { r.classList.remove('rey'); r.querySelectorAll('.player-badge').forEach(b => b.textContent === '👑' && b.remove()); });
    let totalElo = 0, maxElo = 0, reyName = '', reyRow = null;
    rows.forEach(row => {
      const eloEl = row.querySelector('.player-elo');
      if (eloEl) { const elo = parseInt(eloEl.textContent) || 0; totalElo += elo; if (elo > maxElo) { maxElo = elo; reyName = row.querySelector('.player-name-modal').textContent; reyRow = row; } }
    });
    $('modalElo').textContent = Math.round(totalElo / rows.length);
    $('modalReyName').textContent = reyName;
    $('modalReyElo').textContent = maxElo;
    if (reyRow) {
      reyRow.classList.add('rey');
      const nameEl = reyRow.querySelector('.player-name-modal'), existing = reyRow.querySelector('.player-badge'), badge = document.createElement('span');
      badge.className = 'player-badge'; badge.textContent = '👑';
      existing ? existing.after(badge) : nameEl.after(badge);
    }
  }

  function activateInput(el) {
    el.classList.remove('empty'); el.classList.add('input-mode'); el.onclick = null;
    const num = el.querySelector('.player-num').textContent;
    el.innerHTML = '<span class="player-num">'+num+'</span><div class="player-avatar-modal">?</div><div class="autocomplete-wrapper"><input type="text" class="inline-input" placeholder="Tu nombre..." oninput="showAutocomplete(this)" autofocus><div class="autocomplete-list"><div class="autocomplete-item" onclick="selectPlayer(this,\'Roberto Sánchez\',\'R\',1456)"><div class="ac-avatar">R</div><span class="ac-name">Roberto Sánchez</span><span class="ac-elo">1456</span></div><div class="autocomplete-item" onclick="selectPlayer(this,\'Rosa García\',\'R\',1423)"><div class="ac-avatar">R</div><span class="ac-name">Rosa García</span><span class="ac-elo">1423</span></div><div class="autocomplete-item" onclick="selectPlayer(this,\'Raúl Mendoza\',\'R\',1498)"><div class="ac-avatar">R</div><span class="ac-name">Raúl Mendoza</span><span class="ac-elo">1498</span></div></div></div><button class="btn-confirm" onclick="confirmJoin(this)">Unirme</button>';
    el.querySelector('.inline-input').focus();
  }

  function activateWaitlistInput(el) {
    el.classList.remove('empty'); el.classList.add('input-mode'); el.onclick = null;
    el.innerHTML = '<span class="player-num">+</span><div class="player-avatar-modal">?</div><div class="autocomplete-wrapper"><input type="text" class="inline-input" placeholder="Tu nombre..." oninput="showAutocomplete(this)" autofocus><div class="autocomplete-list"><div class="autocomplete-item" onclick="selectPlayer(this,\'Roberto Sánchez\',\'R\',1456)"><div class="ac-avatar">R</div><span class="ac-name">Roberto Sánchez</span><span class="ac-elo">1456</span></div><div class="autocomplete-item" onclick="selectPlayer(this,\'Rosa García\',\'R\',1423)"><div class="ac-avatar">R</div><span class="ac-name">Rosa García</span><span class="ac-elo">1423</span></div><div class="autocomplete-item" onclick="selectPlayer(this,\'Raúl Mendoza\',\'R\',1498)"><div class="ac-avatar">R</div><span class="ac-name">Raúl Mendoza</span><span class="ac-elo">1498</span></div></div></div><button class="btn-confirm" onclick="confirmWaitlistJoin(this)">Unirme</button>';
    el.querySelector('.inline-input').focus();
  }

  function showAutocomplete(input) { input.parentElement.querySelector('.autocomplete-list').classList.toggle('show', input.value.length > 0); }

  function selectPlayer(item, name, initial, elo) {
    const input = item.closest('.player-row').querySelector('.inline-input');
    input.value = name; input.dataset.initial = initial; input.dataset.elo = elo;
    item.closest('.autocomplete-list').classList.remove('show');
  }

  function confirmJoin(btn) {
    const row = btn.closest('.player-row'), input = row.querySelector('.inline-input'), name = input.value;
    if (!name) return;
    const num = row.querySelector('.player-num').textContent, initial = input.dataset.initial || name.charAt(0).toUpperCase(), elo = input.dataset.elo || '1500';
    row.classList.remove('input-mode');
    row.innerHTML = '<span class="player-num">'+num+'</span><div class="player-avatar-modal filled">'+initial+'</div><span class="player-name-modal">'+name+'</span><span class="player-elo">'+elo+'</span><button class="btn-leave" onclick="openConfirmModal(this)">Baja</button>';
    updateCountModal(); updateEloAndReyModal(); updateWaitlistButtons(); launchConfetti(name.split(' ')[0]);
    
    // Actualizar retasData
    if (currentRetaId && retasData[currentRetaId]) {
      const playerIndex = parseInt(num) - 1;
      retasData[currentRetaId].players[playerIndex] = {
        name: name,
        elo: parseInt(elo),
        empty: false
      };
    }
  }

  function confirmWaitlistJoin(btn) {
    const row = btn.closest('.player-row'), input = row.querySelector('.inline-input'), name = input.value;
    if (!name) return;
    const initial = input.dataset.initial || name.charAt(0).toUpperCase(), elo = input.dataset.elo || '1500';
    
    const waitlistMembers = document.querySelector('.waitlist-members');
    const currentCount = waitlistMembers ? waitlistMembers.querySelectorAll('.player-row').length : 0;
    const emptySlots = document.querySelectorAll('#modalPlayersList .player-row.empty:not(.waitlist-add)').length;
    const canJoin = currentCount < emptySlots;
    
    const newRow = document.createElement('div');
    newRow.className = 'player-row waitlist' + (canJoin ? ' can-join' : '');
    newRow.dataset.waitlistIndex = currentCount;
    const actions = canJoin ? '<div class="waitlist-actions"><button class="btn-waitlist join" onclick="joinFromWaitlist(this, '+currentCount+')">Unir</button><button class="btn-waitlist pass" onclick="passWaitlist(this, '+currentCount+')">Paso</button></div>' : '';
    newRow.innerHTML = '<span class="player-num">'+(currentCount+1)+'</span><div class="player-avatar-modal filled">'+initial+'</div><span class="player-name-modal">'+name+'</span>'+actions+'<span class="player-elo">'+elo+'</span><button class="btn-waitlist leave" onclick="leaveWaitlist(this, '+currentCount+')">Baja</button>';
    
    if (!waitlistMembers) {
      const membersDiv = document.createElement('div');
      membersDiv.className = 'waitlist-members';
      membersDiv.appendChild(newRow);
      row.after(membersDiv);
    } else {
      waitlistMembers.appendChild(newRow);
    }
    
    row.classList.remove('input-mode');
    row.classList.add('empty');
    row.onclick = function() { activateWaitlistInput(this); };
    row.innerHTML = '<span class="player-num">+</span><div class="player-avatar-modal">+</div><span class="player-name-modal">Unirse a lista de espera</span>';
    
    const header = document.querySelector('.waitlist-header .players-count');
    if (header) header.textContent = currentCount + 1;
    
    showWaitlistMessage(name.split(' ')[0]);
  }

  function launchConfetti(playerName) {
    showToast(`${playerName} se unió`);
  }

  function showWaitlistMessage(playerName) {
    showToast(`${playerName} en lista de espera`);
  }

  function joinFromWaitlist(btn, index) {
    const row = btn.closest('.player-row');
    const name = row.querySelector('.player-name-modal').textContent;
    const elo = row.querySelector('.player-elo').textContent;
    
    const emptyRow = document.querySelector('#modalPlayersList .player-row.empty:not(.waitlist-add):not(.waitlist)');
    if (emptyRow) {
      const num = emptyRow.querySelector('.player-num').textContent;
      const initial = name.charAt(0);
      emptyRow.className = 'player-row';
      emptyRow.onclick = null;
      emptyRow.innerHTML = '<span class="player-num">'+num+'</span><div class="player-avatar-modal filled">'+initial+'</div><span class="player-name-modal">'+name+'</span><span class="player-elo">'+elo+'</span><button class="btn-leave" onclick="openConfirmModal(this)">Baja</button>';
      
      
      // Actualizar retasData
      if (currentRetaId && retasData[currentRetaId]) {
        const playerIndex = parseInt(num) - 1;
        retasData[currentRetaId].players[playerIndex] = {
          name: name,
          elo: parseInt(elo),
          empty: false
        };
      }
      row.remove();
      
      document.querySelectorAll('#modalPlayersList .player-row.waitlist').forEach((r, i) => {
        r.querySelector('.player-num').textContent = i + 1;
      });
      
      updateCountModal(); updateEloAndReyModal(); updateWaitlistButtons(); launchConfetti(name.split(' ')[0]);
    }
  }

  function passWaitlist(btn, index) {
    const row = btn.closest('.player-row');
    const name = row.querySelector('.player-name-modal').textContent;
    const firstName = name.split(' ')[0];
    const elo = row.querySelector('.player-elo').textContent;
    const initial = name.charAt(0);
    
    const waitlistRows = document.querySelectorAll('#modalPlayersList .player-row.waitlist');
    const lastWaitlistRow = waitlistRows[waitlistRows.length - 1];
    
    if (lastWaitlistRow && row !== lastWaitlistRow) {
      lastWaitlistRow.after(row);
      row.classList.remove('can-join');
      row.querySelector('.waitlist-actions')?.remove();
      
      document.querySelectorAll('#modalPlayersList .player-row.waitlist').forEach((r, i) => {
        r.querySelector('.player-num').textContent = i + 1;
        const emptySlots = document.querySelectorAll('#modalPlayersList .player-row.empty').length;
        if (i < emptySlots && !r.querySelector('.waitlist-actions')) {
          r.classList.add('can-join');
          const nameEl = r.querySelector('.player-name-modal');
          const actions = document.createElement('div');
          actions.className = 'waitlist-actions';
          actions.innerHTML = '<button class="btn-waitlist join" onclick="joinFromWaitlist(this, '+i+')">Unir</button><button class="btn-waitlist pass" onclick="passWaitlist(this, '+i+')">Paso</button>';
          nameEl.after(actions);
        }
      });
      
      showToast(`${firstName} pasó su turno`);
    }
  }

  function leaveWaitlist(btn, index) {
    const row = btn.closest('.player-row');
    const name = row.querySelector('.player-name-modal').textContent.split(' ')[0];
    row.remove();
    
    const waitlistRows = document.querySelectorAll('#modalPlayersList .player-row.waitlist');
    waitlistRows.forEach((r, i) => {
      r.querySelector('.player-num').textContent = i + 1;
    });
    
    const header = document.querySelector('.waitlist-header .players-count');
    if (header) header.textContent = waitlistRows.length;
    
    if (waitlistRows.length === 0) {
      const waitlistHeader = document.querySelector('.waitlist-header');
      if (waitlistHeader) {
        waitlistHeader.insertAdjacentHTML('afterend', '<div class="waitlist-empty">No hay nadie más en espera</div>');
      }
    }
    
    showToast(`${name} salió de la lista`);
  }

  let currentLeaveBtn = null;
  function openConfirmModal(btn) { currentLeaveBtn = btn; $('confirmModal').classList.add('show'); }
  function closeConfirmModal() { $('confirmModal').classList.remove('show'); currentLeaveBtn = null; }
  function confirmLeave() {
    if (currentLeaveBtn) {
      const row = currentLeaveBtn.closest('.player-row');
      const name = row.querySelector('.player-name-modal').textContent.split(' ')[0];
      const num = row.querySelector('.player-num').textContent;
      row.className = 'player-row empty'; row.onclick = function() { activateInput(this); };
      row.innerHTML = '<span class="player-num">'+num+'</span><div class="player-avatar-modal">+</div><span class="player-name-modal">Disponible</span>';
      updateCountModal(); updateEloAndReyModal(); updateWaitlistButtons();
      
      // Actualizar retasData
      if (currentRetaId && retasData[currentRetaId]) {
        const playerIndex = parseInt(num) - 1;
        retasData[currentRetaId].players[playerIndex] = {
          name: 'Disponible',
          elo: null,
          empty: true
        };
      }
      showToast(`${name} salió del partido`);
    }
    closeConfirmModal();
  }

  function updateWaitlistButtons() {
    const emptySlots = document.querySelectorAll('#modalPlayersList .player-row.empty:not(.waitlist-add):not(.waitlist)').length;
    const waitlistRows = document.querySelectorAll('#modalPlayersList .player-row.waitlist');
    
    waitlistRows.forEach((row, i) => {
      const canJoin = emptySlots > 0 && i < emptySlots;
      const existingActions = row.querySelector('.waitlist-actions');
      const eloEl = row.querySelector('.player-elo');
      
      if (canJoin && !existingActions) {
        row.classList.add('can-join');
        const actions = document.createElement('div');
        actions.className = 'waitlist-actions';
        actions.innerHTML = '<button class="btn-waitlist join" onclick="joinFromWaitlist(this, '+i+')">Unir</button><button class="btn-waitlist pass" onclick="passWaitlist(this, '+i+')">Paso</button>';
        eloEl.before(actions);
      } else if (!canJoin && existingActions) {
        row.classList.remove('can-join');
        existingActions.remove();
      }
    });
  }

  // ============================================
  // FUNCIONES NUEVAS PARA SECCIÓN DE PARTIDOS
  // ============================================

  function resetModalTabs() {
    $$('.modal-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.modal-tab[data-tab="jugadores"]').classList.add('active');
    document.querySelector('.players-section').classList.remove('hidden');
    $('matchesSection').classList.remove('active');
    
    // En PC (≥1024px) cargar partidos automáticamente
    if (window.innerWidth >= 1024) {
      renderMatchesSection(currentRetaId);
    }
  }

  function renderMatchesSection(retaId) {
    const data = matchesData[retaId];
    
    if (!data) {
      renderEmptyMatches();
      return;
    }
    
    // Calcular última ronda activa (in-progress o última completada)
    let lastActiveRound = 1;
    for (let r = 1; r <= data.totalRounds; r++) {
      const round = data.rounds[r];
      if (round && (round.status === 'in-progress' || round.status === 'completed')) {
        lastActiveRound = r;
      }
    }
    currentRoundView = lastActiveRound;
    
    // Renderizar botones de rondas
    const roundsScrollEl = $('roundsScroll');
    if (roundsScrollEl) {
      roundsScrollEl.innerHTML = renderRoundButtons(data.totalRounds, currentRoundView, data);
    }
    setTimeout(() => updateRoundsArrows(), 100);
    
    // Renderizar TODAS las rondas
    renderAllRounds(data);
    
    // Renderizar tabla de posiciones
    renderStandingsTable(retaId);
    
    // Aplicar degradado dinámico después de renderizar
    setTimeout(() => applyDynamicGradient(), 50);
    
    // Scroll a la última ronda activa después de renderizar
    setTimeout(() => {
      scrollToRoundInstant(lastActiveRound);
      scrollPillToView(lastActiveRound);
      setupScrollSync();
    }, 100);
  }
  
  // Scroll el carrusel de pills para mostrar el pill activo
  function scrollPillToView(roundNum) {
    const pills = document.querySelectorAll('#roundsScroll .round-btn');
    const activePill = pills[roundNum - 1];
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
    }
  }
  
  // Flag para evitar conflictos entre click y scroll
  let isScrollingFromClick = false;
  
  // Función para scroll instantáneo a una ronda (sin animación, para carga inicial)
  function scrollToRoundInstant(roundNum) {
    const roundElement = document.getElementById(`round-${roundNum}`);
    const matchesSection = document.getElementById('matchesSection');
    const courtsContainer = document.getElementById('courtsContainer');
    
    if (roundElement && matchesSection && courtsContainer) {
      // Calcular posición dentro del courtsContainer
      const scrollTop = roundElement.offsetTop - courtsContainer.offsetTop;
      matchesSection.scrollTop = scrollTop;
    }
  }
  
  // Función para scroll suave a una ronda (con animación, para clicks)
  function scrollToRoundSmooth(roundNum) {
    const roundElement = document.getElementById(`round-${roundNum}`);
    const matchesSection = document.getElementById('matchesSection');
    const courtsContainer = document.getElementById('courtsContainer');
    
    if (roundElement && matchesSection && courtsContainer) {
      isScrollingFromClick = true;
      
      const scrollTop = roundElement.offsetTop - courtsContainer.offsetTop;
      matchesSection.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
      
      // Desactivar flag después de que termine el scroll
      setTimeout(() => {
        isScrollingFromClick = false;
      }, 500);
    }
  }
  
  // Configurar sincronización de scroll con pills
  function setupScrollSync() {
    const matchesSection = document.getElementById('matchesSection');
    const courtsContainer = document.getElementById('courtsContainer');
    if (!matchesSection || !courtsContainer) return;
    
    // Remover listener previo si existe
    if (matchesSection._scrollSyncHandler) {
      matchesSection.removeEventListener('scroll', matchesSection._scrollSyncHandler);
    }
    
    const handleScroll = () => {
      // No sincronizar si el scroll viene de un click
      if (isScrollingFromClick) return;
      
      const roundGroups = courtsContainer.querySelectorAll('.round-group');
      const scrollTop = matchesSection.scrollTop;
      const viewportHeight = matchesSection.clientHeight;
      const viewportCenter = scrollTop + (viewportHeight / 2);
      
      let visibleRound = 1;
      let minDistance = Infinity;
      
      // Encontrar la ronda más cercana al centro del viewport
      roundGroups.forEach((group, index) => {
        const groupTop = group.offsetTop - courtsContainer.offsetTop;
        const groupHeight = group.offsetHeight;
        const groupCenter = groupTop + (groupHeight / 2);
        const distance = Math.abs(viewportCenter - groupCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          visibleRound = index + 1;
        }
      });
      
      // Actualizar pill activo solo si cambió
      if (visibleRound !== currentRoundView) {
        currentRoundView = visibleRound;
        updateActivePill(visibleRound);
      }
    };
    
    // Usar throttle para no ejecutar en cada pixel de scroll
    let scrollTimeout;
    matchesSection._scrollSyncHandler = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 100);
    };
    
    matchesSection.addEventListener('scroll', matchesSection._scrollSyncHandler);
  }
  
  // Actualizar el pill activo
  function updateActivePill(roundNum) {
    const pills = document.querySelectorAll('#roundsScroll .round-btn');
    pills.forEach((pill, index) => {
      pill.classList.toggle('active', index + 1 === roundNum);
    });
    
    // Scroll el pill a la vista si es necesario
    const activePill = pills[roundNum - 1];
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function renderStandingsTable(retaId) {
    const matchData = matchesData[retaId];
    const retaData = retasData[retaId];
    const container = $('standingsTable');
    
    if (!container || !retaData) return;
    
    const numRounds = matchData ? matchData.totalRounds : 7;
    const allPlayers = retaData.players;
    
    // Calcular puntos por jugador
    const playerStats = {};
    allPlayers.forEach((p, idx) => {
      if (!p.empty) {
        playerStats[p.name] = {
          name: p.name,
          initial: p.name.charAt(0),
          elo: p.elo,
          isRey: p.isRey,
          isOrganizer: p.isOrganizer,
          rounds: Array(numRounds).fill(null),
          total: 0,
          originalIndex: idx
        };
      }
    });
    
    // Recorrer partidos y asignar puntos
    if (matchData) {
      for (let r = 1; r <= numRounds; r++) {
        const round = matchData.rounds[r];
        if (!round || !round.matches) continue;
        
        round.matches.forEach(match => {
          if (match.score && match.winner) {
            const winnerTeam = match.winner === 1 ? match.team1 : match.team2;
            const loserTeam = match.winner === 1 ? match.team2 : match.team1;
            const winnerScore = match.winner === 1 ? match.score.team1 : match.score.team2;
            const loserScore = match.winner === 1 ? match.score.team2 : match.score.team1;
            
            winnerTeam.forEach(p => {
              if (playerStats[p.name]) {
                playerStats[p.name].rounds[r-1] = winnerScore;
                playerStats[p.name].total += winnerScore;
              }
            });
            
            loserTeam.forEach(p => {
              if (playerStats[p.name]) {
                playerStats[p.name].rounds[r-1] = loserScore;
                playerStats[p.name].total += loserScore;
              }
            });
          }
        });
      }
    }
    
    // Ordenar por total descendente
    const sortedPlayers = Object.values(playerStats).sort((a, b) => b.total - a.total);
    
    // Asignar posiciones
    sortedPlayers.forEach((p, i) => {
      p.position = i + 1;
    });
    
    // Contar slots vacíos
    const emptySlots = allPlayers.filter(p => p.empty).length;
    
    // Generar HTML
    const currentRound = matchData ? matchData.currentRound : 1;
    const isMobile = window.innerWidth < 1024;
    
    // Encontrar las rondas que tienen datos (en orden)
    let playedRounds = [];
    if (matchData) {
      for (let r = 1; r <= numRounds; r++) {
        const round = matchData.rounds[r];
        if (round && round.matches && round.matches.some(m => m.score !== null)) {
          playedRounds.push(r);
        }
      }
    }
    // Si no hay rondas jugadas, mostrar R1
    if (playedRounds.length === 0) playedRounds = [1];
    // Tomar solo la última ronda capturada para móvil
    const lastRounds = playedRounds.slice(-1);
    const numMobileRounds = lastRounds.length;
    
    container.style.setProperty('--num-rounds', numRounds);
    
    // En móvil, agregar clase con número de rondas
    if (isMobile) {
      container.dataset.mobileRounds = numMobileRounds;
    }
    
    let html = `<div class="standings-header">
      <div class="standings-header-cell">#</div>
      <div class="standings-header-cell player-col">Jugador</div>`;
    
    if (isMobile) {
      // En móvil mostrar "ÚLT" en lugar del número de ronda
      html += `<div class="standings-header-cell round-col">ÚLT</div>`;
    } else {
      // En PC mostrar todas las rondas
      for (let r = 1; r <= numRounds; r++) {
        const isCurrentRound = r === currentRound;
        html += `<div class="standings-header-cell round-col${isCurrentRound ? ' current-round' : ''}">R${r}</div>`;
      }
    }
    html += `<div class="standings-header-cell">Total</div></div>`;
    
    // Jugadores con puntos
    const maxTotal = sortedPlayers.length > 0 ? sortedPlayers[0].total : 1;
    
    sortedPlayers.forEach(p => {
      const posClass = p.position === 1 ? 'first-place' : p.position === 2 ? 'second-place' : p.position === 3 ? 'third-place' : '';
      const posCircleClass = p.position <= 3 ? `pos-${p.position}` : 'pos-other';
      const avatarBadge = p.isRey ? '<span class="avatar-badge">👑</span>' : (p.isOrganizer ? '<span class="avatar-badge">🔑</span>' : '');
      const eloClass = p.isRey ? 'rey' : '';
      
      // SVG medalla tipo pin con ribbon abajo - color sólido
      const goldMedal = `<svg class="medal-svg" viewBox="0 0 24 28" width="24" height="28">
        <path d="M8 18L6 26L12 23L18 26L16 18" fill="#DAA520"/>
        <circle cx="12" cy="11" r="9" fill="#FFD700"/>
        <text x="12" y="14.5" text-anchor="middle" font-size="8" font-weight="800" fill="#8B6914">1</text>
      </svg>`;
      const silverMedal = `<svg class="medal-svg" viewBox="0 0 24 28" width="24" height="28">
        <path d="M8 18L6 26L12 23L18 26L16 18" fill="#909090"/>
        <circle cx="12" cy="11" r="9" fill="#C0C0C0"/>
        <text x="12" y="14.5" text-anchor="middle" font-size="8" font-weight="800" fill="#505050">2</text>
      </svg>`;
      const bronzeMedal = `<svg class="medal-svg" viewBox="0 0 24 28" width="24" height="28">
        <path d="M8 18L6 26L12 23L18 26L16 18" fill="#A0522D"/>
        <circle cx="12" cy="11" r="9" fill="#CD7F32"/>
        <text x="12" y="14.5" text-anchor="middle" font-size="8" font-weight="800" fill="#5D3A1A">3</text>
      </svg>`;
      
      const posDisplay = p.position === 1 ? goldMedal : p.position === 2 ? silverMedal : p.position === 3 ? bronzeMedal : p.position;
      const progressPercent = maxTotal > 0 ? (p.total / maxTotal) * 100 : 0;
      
      html += `<div class="standings-row ${posClass}" onclick="showPlayerToast('${p.name}')">
        <div class="standings-position ${posCircleClass}">${posDisplay}</div>
        <div class="standings-player">
          <div class="standings-player-avatar">${p.initial}${avatarBadge}</div>
          <span class="standings-player-name">${p.name.split(' ')[0]} <span class="elo-inline">(${p.elo})</span></span>
        </div>`;
      
      if (isMobile) {
        // En móvil solo mostrar las últimas 3 rondas jugadas
        lastRounds.forEach(r => {
          const roundScore = p.rounds[r - 1];
          if (roundScore === null) {
            html += `<div class="standings-round-score pending">-</div>`;
          } else {
            html += `<div class="standings-round-score">${roundScore}</div>`;
          }
        });
      } else {
        // En PC mostrar todas las rondas
        p.rounds.forEach(score => {
          if (score === null) {
            html += `<div class="standings-round-score pending">-</div>`;
          } else {
            html += `<div class="standings-round-score">${score}</div>`;
          }
        });
      }
      
      // Calcular posición del punto al final del arco (el SVG ya está rotado -90deg)
      const angleDeg = (progressPercent / 100) * 360;
      const angleRad = angleDeg * (Math.PI / 180);
      const dotX = 22 + 18 * Math.cos(angleRad);
      const dotY = 22 + 18 * Math.sin(angleRad);
      
      html += `<div class="standings-total-wrapper">
        <svg class="standings-progress-ring" viewBox="0 0 44 44">
          <circle class="progress-ring-bg" cx="22" cy="22" r="18" />
          <circle class="progress-ring-fill" cx="22" cy="22" r="18" stroke-dasharray="${113.1}" stroke-dashoffset="${113.1 - (113.1 * progressPercent / 100)}" />
          ${progressPercent > 5 ? `<circle class="progress-ring-dot" cx="${dotX.toFixed(2)}" cy="${dotY.toFixed(2)}" r="1.5" />` : ''}
        </svg>
        <div class="standings-total">${p.total}</div>
      </div></div>`;
    });
    
    // Slots vacíos
    for (let i = 0; i < emptySlots; i++) {
      html += `<div class="standings-row empty-slot">
        <div class="standings-position pos-empty">+</div>
        <div class="standings-player">
          <div class="standings-player-avatar empty">+</div>
          <span class="standings-player-name empty">Disponible</span>
        </div>`;
      if (isMobile) {
        lastRounds.forEach(() => {
          html += `<div class="standings-round-score pending">-</div>`;
        });
      } else {
        for (let r = 0; r < numRounds; r++) {
          html += `<div class="standings-round-score pending">-</div>`;
        }
      }
      
      html += `<div class="standings-total">-</div></div>`;
    }
    
    container.innerHTML = html;
  }

  function applyDynamicGradient() {
    const container = $('courtsContainer');
    if (!container) return;
    
    const roundGroups = container.querySelectorAll('.round-group');
    if (roundGroups.length === 0) return;
    
    const colors = ['#e8e8e8', '#d6e9f8']; // gris, azul
    const totalHeight = container.scrollHeight;
    
    if (totalHeight === 0) return;
    
    let gradientStops = [];
    let currentPosition = 0;
    
    roundGroups.forEach((group, index) => {
      const groupHeight = group.offsetHeight;
      const color = colors[index % 2];
      const nextColor = colors[(index + 1) % 2];
      
      const startPercent = (currentPosition / totalHeight) * 100;
      const endPercent = ((currentPosition + groupHeight) / totalHeight) * 100;
      
      // El color sólido va hasta el 95% de este grupo
      const solidEndPercent = startPercent + (endPercent - startPercent) * 0.95;
      
      // La transición termina al 5% del siguiente grupo
      const nextGroupStart = endPercent;
      const nextGroup = roundGroups[index + 1];
      const nextGroupHeight = nextGroup ? nextGroup.offsetHeight : 0;
      const transitionEndPercent = nextGroupStart + ((nextGroupHeight / totalHeight) * 100) * 0.05;
      
      // Color sólido de esta ronda
      if (index === 0) {
        gradientStops.push(`${color} ${startPercent.toFixed(2)}%`);
      }
      gradientStops.push(`${color} ${solidEndPercent.toFixed(2)}%`);
      
      // Transición termina al 5% del siguiente grupo
      if (nextGroup) {
        gradientStops.push(`${nextColor} ${transitionEndPercent.toFixed(2)}%`);
      }
      
      currentPosition += groupHeight;
    });
    
    container.style.background = `linear-gradient(180deg, ${gradientStops.join(', ')})`;
  }

  function renderAllRounds(data) {
    const container = $('courtsContainer');
    let html = '';
    
    for (let roundNum = 1; roundNum <= data.totalRounds; roundNum++) {
      const round = data.rounds[roundNum];
      
      html += `<div class="round-group" id="round-${roundNum}">`;
      
      // Título de la ronda
      html += `<div class="round-divider">
        <span class="round-divider-line"></span>
        <span class="round-divider-text">RONDA ${roundNum}</span>
        <span class="round-divider-line"></span>
      </div>`;
      
      html += `<div class="round-group-matches">`;
      
      // Canchas de la ronda
      if (!round || !round.matches || round.matches.length === 0) {
        html += renderEmptyRound(roundNum, round ? round.status : 'pending');
      } else {
        html += round.matches.map((match, matchIndex) => renderMatchCard(match, round.status, roundNum, matchIndex)).join('');
    
      }
      
      html += `</div></div>`;
    }
    
    // Verificar si la reta está completada
    const isRetaCompleted = checkRetaCompleted(data);
    
    // Agregar botón de resultados al final si está completada
    if (isRetaCompleted) {
      html += `
        <button class="btn-results-bottom" onclick="showResultsTab()">
          <span class="material-symbols-outlined btn-results-icon">emoji_events</span>
          <span>Ver resultados finales</span>
        </button>
      `;
    }
    
    container.innerHTML = html;
    
    // Mostrar/ocultar botón del header
    updateResultsButtonVisibility(isRetaCompleted);
    
    // Event delegation para clicks en court-cards (se agrega cada vez que se renderiza)
    const handleCardClick = function(e) {
      const card = e.target.closest('.court-card.clickable');
      if (card) {
        const roundNum = parseInt(card.dataset.round);
        const matchIndex = parseInt(card.dataset.matchIndex);
        openScoreModal(roundNum, matchIndex);
      }
    };
    
    // Remover listener previo si existe
    if (container._clickHandler) {
      container.removeEventListener('click', container._clickHandler);
    }
    
    // Agregar nuevo listener
    container._clickHandler = handleCardClick;
    container.addEventListener('click', handleCardClick);
  }
  
  // Verificar si todas las rondas están completadas
  function checkRetaCompleted(data) {
    if (!data || !data.rounds) return false;
    
    for (let r = 1; r <= data.totalRounds; r++) {
      const round = data.rounds[r];
      if (!round || round.status !== 'completed') return false;
    }
    return true;
  }
  
  // Mostrar/ocultar botón de resultados en header
  function updateResultsButtonVisibility(show) {
    const btn = $('btnResultsHeader');
    if (btn) {
      btn.style.display = show ? 'flex' : 'none';
    }
  }
  
  // Función para ir a la pestaña de resultados
  // ============================================
  // CARRUSEL DE MOMENTOS DESTACADOS
  // ============================================
  let momentosInterval = null;
  let currentMomentoIndex = 0;
  let totalMomentos = 0;
  
  function navigateMomento(direction) {
    const newIndex = (currentMomentoIndex + direction + totalMomentos) % totalMomentos;
    goToMomento(newIndex);
    resetMomentosAutoRotation();
  }
  
  function goToMomento(index) {
    const slides = document.querySelectorAll('.momento-slide');
    const dots = document.querySelectorAll('.momento-dot');
    
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentMomentoIndex = index;
  }
  
  function startMomentosAutoRotation(total) {
    totalMomentos = total;
    currentMomentoIndex = 0;
    
    if (momentosInterval) clearInterval(momentosInterval);
    
    momentosInterval = setInterval(() => {
      const nextIndex = (currentMomentoIndex + 1) % totalMomentos;
      goToMomento(nextIndex);
    }, 4000); // Cambia cada 4 segundos
  }
  
  function resetMomentosAutoRotation() {
    if (momentosInterval) clearInterval(momentosInterval);
    momentosInterval = setInterval(() => {
      const nextIndex = (currentMomentoIndex + 1) % totalMomentos;
      goToMomento(nextIndex);
    }, 4000);
  }
  
  // Hacer funciones globales
  window.navigateMomento = navigateMomento;
  window.goToMomento = goToMomento;

  function showResultsTab() {
    const modal = document.querySelector('.modal');
    const resultsSection = $('resultsSection');
    const matchesSection = $('matchesSection');
    
    // Agregar clase tab-resultados
    modal.classList.add('tab-resultados');
    
    // Mostrar results-section
    if (resultsSection) resultsSection.style.display = 'flex';
    
    // Ocultar matches-section
    if (matchesSection) matchesSection.classList.remove('active');
    
    // Renderizar resultados si la función existe
    if (typeof renderResultsSection === 'function') {
      renderResultsSection(currentRetaId);
    }
  }
  
  // Función para volver a partidos desde resultados
  window.showMatchesFromResults = function() {
    const modal = document.querySelector('.modal');
    const resultsSection = $('resultsSection');
    const matchesSection = $('matchesSection');
    
    // Quitar clase tab-resultados
    modal.classList.remove('tab-resultados');
    
    // Ocultar results-section (quitar estilo inline)
    if (resultsSection) resultsSection.style.display = 'none';
    
    // Mostrar matches-section
    if (matchesSection) matchesSection.classList.add('active');
  }

  function renderRound(roundNum) {
    // Actualizar botones activos
    $$('#roundsScroll .round-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i + 1 === roundNum);
    });
    
    // Scroll a la ronda usando la función centralizada
    scrollToRoundSmooth(roundNum);
  }

  function renderMatchCard(match, roundStatus, roundNum, matchIndex) {
    const isCompleted = match.winner !== null;
    const isLive = roundStatus === 'in-progress' && !isCompleted;
    const isPending = match.score === null && !isLive; // Solo pending si no está en vivo
    // Usar data attributes en lugar de onclick inline
    const dataAttrs = `data-round="${roundNum}" data-match-index="${matchIndex}"`
    
    // Calcular duración variable
    const baseDuration = 12 + (match.court * 2.3) + ((match.score?.team1 || 0) * 0.4);
    const duration = (Math.round(baseDuration * 10) / 10).toFixed(1) + ' min';
    
    // Calcular ELO promedio de cada equipo
    const team1Elo = Math.round((match.team1[0].elo + match.team1[1].elo) / 2);
    const team2Elo = Math.round((match.team2[0].elo + match.team2[1].elo) / 2);
    
    // Determinar favorito
    const favoriteTeam = team1Elo >= team2Elo ? 1 : 2;
    
    // Función para generar score con badge debajo
    const renderScore = (score1, score2, winner, matchLabelObj) => {
      const badgeHtml = matchLabelObj ? `<div class="score-badge">${matchLabelObj.emoji} ${matchLabelObj.text}</div>` : '';
      return `
        <div class="score-display-new">
          <div class="score-row">
            <div class="score-box">
              <div class="score-number ${winner === 1 ? 'winner' : ''}">${score1}</div>
            </div>
            <div class="score-separator-new"></div>
            <div class="score-box">
              <div class="score-number ${winner === 2 ? 'winner' : ''}">${score2}</div>
            </div>
          </div>
        </div>
        ${badgeHtml}
      `;
    };
    
    // Badge de estado con duración
    let statusBadge = '';
    if (isLive) {
      statusBadge = `<div class="court-status-badge live"><span class="status-pulse"></span>EN VIVO</div><div class="court-duration"><span class="material-symbols-outlined">timer</span>${duration} (est.)</div>`;
    } else if (isCompleted) {
      statusBadge = `<div class="court-status-badge completed">✓ Finalizado</div><div class="court-duration"><span class="material-symbols-outlined">timer</span>${duration}</div>`;
    } else if (isPending) {
      statusBadge = `<div class="court-status-badge pending">Próximo</div><div class="court-duration"><span class="material-symbols-outlined">timer</span>${duration} (est.)</div>`;
    }
    
    // Texto de favoritos para apuestas
    const favoritesText = favoriteTeam === 1 
      ? `${match.team1[0].name.split(' ')[0]} y ${match.team1[1].name.split(' ')[0]}`
      : `${match.team2[0].name.split(' ')[0]} y ${match.team2[1].name.split(' ')[0]}`;
    
    // Partido pendiente - sin badge, solo elo grupal y sin marcadores
    if (isPending) {
      return `
        <div class="court-card pending-card clickable" ${dataAttrs}>
          <div class="court-header">
            <div class="court-name">
              <span class="court-icon"><span class="material-symbols-outlined">sports_tennis</span></span>
              <span class="court-label">Cancha ${match.court}</span>
            </div>
            ${statusBadge}
          </div>
          <div class="padel-court pending-court">
            <div class="court-team court-team-left">
              <div class="team-elo-label">${team1Elo}</div>
              ${renderCourtPlayer(match.team1[0], false)}
              ${renderCourtPlayer(match.team1[1], false)}
            </div>
            <div class="pending-vs"></div>
            <div class="court-team court-team-right">
              <div class="team-elo-label">${team2Elo}</div>
              ${renderCourtPlayer(match.team2[0], false)}
              ${renderCourtPlayer(match.team2[1], false)}
            </div>
            <div class="match-pending-overlay">
              <div class="match-pending-content">
                <div class="match-pending-icon">VS</div>
                <div class="match-pending-text">Próximo</div>
              </div>
            </div>
          </div>
          <div class="match-prediction-footer">
            <span class="prediction-text">🎯 Apuestas a favor de ${favoritesText}</span>
          </div>
        </div>
      `;
    }
    
    // Nombres de ganadores
    const winnersText = match.winner === 1 
      ? `${match.team1[0].name.split(' ')[0]} y ${match.team1[1].name.split(' ')[0]}`
      : `${match.team2[0].name.split(' ')[0]} y ${match.team2[1].name.split(' ')[0]}`;
    
    // Cambios de ELO
    const eloChange = match.eloChanges ? (match.winner === 1 ? match.eloChanges.team1 : match.eloChanges.team2) : 0;
    
    // SVG de pelota de tenis realista (compatible con todos los navegadores)
    const tennisBallSVG = `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ballGradient" cx="35%" cy="35%" r="60%">
            <stop offset="0%" style="stop-color:#E8F748"/>
            <stop offset="40%" style="stop-color:#D4E621"/>
            <stop offset="100%" style="stop-color:#9BB518"/>
          </radialGradient>
          <filter id="ballShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#ballGradient)" filter="url(#ballShadow)"/>
        <path d="M 8 50 Q 50 15 92 50" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
        <path d="M 8 50 Q 50 85 92 50" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
        <ellipse cx="28" cy="32" rx="8" ry="5" fill="#fff" opacity="0.35"/>
      </svg>
    `;
    
    // Función para generar la zona central del partido en vivo (con pelota animada y bet)
    const renderLiveCenter = () => {
      // Delay basado en el número de cancha para que las pelotas no vayan sincronizadas
      const delay = ((match.court - 1) * 0.7) % 2.8;
      return `
        <div class="live-center-wrapper">
          <div class="live-vs-display">
            <span class="live-vs-text">VS</span>
          </div>
          <div class="live-ball-container">
            <div class="tennis-ball" style="animation-delay: -${delay}s;">${tennisBallSVG}</div>
          </div>
        </div>
      `;
    };
    
    // Calcular etiqueta según diferencia de puntos (Reñido/Dominado/Palizón)
    const getMatchLabel = () => {
      if (!match.score) return null;
      const A = Math.max(match.score.team1, match.score.team2);
      const B = Math.min(match.score.team1, match.score.team2);
      const N = A + B;
      if (N === 0) return null;
      const D = A - B;
      const Mitad = Math.ceil(N / 2);
      
      if (D >= Mitad) return { text: 'PALIZÓN', emoji: '👊' };
      if (D >= 2) return { text: 'DOMINADO', emoji: '✊' };
      return { text: 'REÑIDO', emoji: '⚡' };
    };
    
    const matchLabel = isCompleted ? getMatchLabel() : null;
    
    return `
      <div class="court-card ${isCompleted ? 'completed' : ''} ${isLive ? 'live-match' : ''} clickable" ${dataAttrs}>
        <div class="court-header">
          <div class="court-name">
            <span class="court-icon"><span class="material-symbols-outlined">sports_tennis</span></span>
            <span class="court-label">Cancha ${match.court}</span>
          </div>
          ${statusBadge}
        </div>
        <div class="padel-court">
          <div class="court-team court-team-left">
            <div class="team-elo-label">${team1Elo}</div>
            ${renderCourtPlayer(match.team1[0], match.winner === 1)}
            ${renderCourtPlayer(match.team1[1], match.winner === 1)}
          </div>
          ${isLive ? renderLiveCenter() : renderScore(match.score.team1, match.score.team2, match.winner, matchLabel)}
          <div class="court-team court-team-right">
            <div class="team-elo-label">${team2Elo}</div>
            ${renderCourtPlayer(match.team2[0], match.winner === 2)}
            ${renderCourtPlayer(match.team2[1], match.winner === 2)}
          </div>
        </div>
        ${isCompleted ? `
          <div class="match-result-footer">
            <div class="winners-block">
              <span class="trophy-circle">🏆</span>
              ${match.eloChanges ? `<span class="elo-change positive">▲+${Math.abs(eloChange)}</span>` : ''}
              <span class="winners-names-text">${winnersText}</span>
            </div>
          </div>
        ` : ''}
        ${isLive ? `
          <div class="match-prediction-footer">
            <span class="prediction-text">🎯 Apuestas a favor de ${favoritesText}</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  function renderCourtPlayer(player, isWinner) {
    const initial = player?.initial || player?.name?.charAt(0) || '?';
    const name = player?.name || 'Jugador';
    const firstName = name.split(' ')[0];
    const elo = player?.elo || '?';
    // Detectar si es el rey comparando con retasData
    const retaData = retasData[currentRetaId];
    const isRey = player?.isRey || (retaData && retaData.rey && retaData.rey.name === name);
    // Detectar si es organizador
    const isOrganizer = player?.isOrganizer || (retaData && retaData.organizer && retaData.organizer.name === name);
    
    // Determinar badge: rey tiene prioridad sobre organizador
    let badge = '';
    if (isRey) {
      badge = '<span class="player-crown">👑</span>';
    } else if (isOrganizer) {
      badge = '<span class="player-crown">🔑</span>';
    }
    
    return `
      <div class="court-player ${isWinner ? 'winner' : ''}">
        <div class="court-player-avatar" onclick="event.stopPropagation(); showPlayerToast('${name}')">${initial}${badge}</div>
        <div class="court-player-info" onclick="event.stopPropagation(); showPlayerToast('${name}')">
          <span class="court-player-name">${firstName}</span>
          <span class="court-player-elo">${elo}</span>
        </div>
      </div>
    `;
  }

  function renderRoundButtons(totalRounds, currentRound, matchesData) {
    let html = '';
    for (let i = 1; i <= totalRounds; i++) {
      const round = matchesData.rounds[i];
      const status = round?.status || 'pending';
      const isActive = i === currentRound;
      const isCompleted = status === 'completed';
      const isInProgress = status === 'in-progress';
      const classes = ['round-btn'];
      if (isActive) classes.push('active');
      if (isCompleted) classes.push('completed');
      if (isInProgress && !isCompleted) classes.push('in-progress');
      
      html += `<button class="${classes.join(' ')}" onclick="goToRound(${i})">Ronda ${i}</button>`;
    }
    return html;
  }
  function renderEmptyRound(roundNum, status) {
    const messages = {
      'pending': { icon: '📋', text: 'Partidos por asignar', subtext: 'Los emparejamientos se generarán automáticamente' },
      'in-progress': { icon: '⏳', text: 'Cargando partidos...', subtext: '' },
      'completed': { icon: '✅', text: 'Ronda completada', subtext: 'No hay datos de partidos disponibles' }
    };
    const msg = messages[status] || messages.pending;
    return `
      <div class="matches-empty">
        <div class="matches-empty-icon">${msg.icon}</div>
        <div class="matches-empty-text">${msg.text}</div>
        ${msg.subtext ? `<div class="matches-empty-subtext">${msg.subtext}</div>` : ''}
      </div>
    `;
  }

  function renderEmptyMatches() {
    $('courtsContainer').innerHTML = `
      <div class="matches-empty">
        <div class="matches-empty-icon">🎾</div>
        <div class="matches-empty-text">No hay partidos programados</div>
        <div class="matches-empty-subtext">Los partidos se crearán cuando la reta esté completa</div>
      </div>
    `;
    $('roundsProgress').innerHTML = '';
  }

  function goToRound(roundNum) {
    const data = matchesData[currentRetaId];
    if (!data || roundNum < 1 || roundNum > data.totalRounds) return;
    currentRoundView = roundNum;
    renderRound(roundNum);
  }

  // Variables para el modal de marcador
  let currentEditingMatch = null;
  let currentEditingRound = null;
  let score1 = 0;
  let score2 = 0;

  function openScoreModal(roundNum, matchIndex) {
    const data = matchesData[currentRetaId];
    if (!data) return;
    
    // Validar que todas las rondas anteriores estén completadas
    if (roundNum > 1) {
      // Buscar la primera ronda que no esté completada (la que está en juego)
      let rondaEnJuego = null;
      for (let i = 1; i < roundNum; i++) {
        const round = data.rounds[i];
        if (round && round.status !== 'completed') {
          const hasUnfinishedMatches = round.matches?.some(m => m.winner === null);
          if (hasUnfinishedMatches || round.status === 'in-progress') {
            rondaEnJuego = i;
            break;
          }
        }
      }
      
      if (rondaEnJuego !== null) {
        showToast(`⚠️ La Ronda ${rondaEnJuego} sigue en juego. Termínala para continuar.`, 4000);
        return;
      }
    }
    
    const match = data.rounds[roundNum]?.matches[matchIndex];
    if (!match) return;
    
    // Guardar referencia al partido que estamos editando
    currentEditingMatch = matchIndex;
    currentEditingRound = roundNum;
    
    // Obtener nombres de equipos
    const team1Name = `${match.team1[0].name.split(' ')[0]} y ${match.team1[1].name.split(' ')[0]}`;
    const team2Name = `${match.team2[0].name.split(' ')[0]} y ${match.team2[1].name.split(' ')[0]}`;
    
    // Cargar marcador actual o iniciar en 0
    score1 = match.score?.team1 || 0;
    score2 = match.score?.team2 || 0;
    
    // Actualizar UI del modal
    document.getElementById('scoreTeam1Name').textContent = team1Name;
    document.getElementById('scoreTeam2Name').textContent = team2Name;
    document.getElementById('scoreValue1').textContent = score1;
    document.getElementById('scoreValue2').textContent = score2;
    updateWinnerIndicator();
    
    // Mostrar modal
    document.getElementById('scoreModalOverlay').classList.add('show');
  }

  // Exponer función globalmente para onclick inline
  window.openScoreModal = openScoreModal;

  function closeScoreModal() {
    document.getElementById('scoreModalOverlay').classList.remove('show');
    currentEditingMatch = null;
    currentEditingRound = null;
  }

  function updateScore(team, delta) {
    if (team === 1) {
      score1 = Math.max(0, score1 + delta);
      document.getElementById('scoreValue1').textContent = score1;
    } else {
      score2 = Math.max(0, score2 + delta);
      document.getElementById('scoreValue2').textContent = score2;
    }
    updateWinnerIndicator();
  }

  function updateWinnerIndicator() {
    const indicator = document.getElementById('scoreWinnerIndicator');
    const team1Name = document.getElementById('scoreTeam1Name').textContent;
    const team2Name = document.getElementById('scoreTeam2Name').textContent;
    const scoreValue1 = document.getElementById('scoreValue1');
    const scoreValue2 = document.getElementById('scoreValue2');
    
    // Remover clases winning
    scoreValue1.classList.remove('winning');
    scoreValue2.classList.remove('winning');
    
    if (score1 > score2) {
      indicator.textContent = `${team1Name} van ganando`;
      indicator.classList.add('has-winner');
      scoreValue1.classList.add('winning');
    } else if (score2 > score1) {
      indicator.textContent = `${team2Name} van ganando`;
      indicator.classList.add('has-winner');
      scoreValue2.classList.add('winning');
    } else {
      indicator.textContent = 'Marcador empatado';
      indicator.classList.remove('has-winner');
    }
  }

  // Variable para saber si el partido era en vivo
  let isEditingLiveMatch = false;

  function saveScore() {
    if (currentEditingMatch === null || currentEditingRound === null) return;
    if (score1 === score2) {
      alert('El marcador no puede quedar empatado');
      return;
    }
    
    const data = matchesData[currentRetaId];
    const match = data.rounds[currentEditingRound].matches[currentEditingMatch];
    const roundStatus = data.rounds[currentEditingRound].status;
    
    // Si es partido en vivo (no tenía ganador), mostrar confirmación
    if (roundStatus === 'in-progress' && match.winner === null) {
      isEditingLiveMatch = true;
      document.getElementById('confirmFinalizeOverlay').classList.add('show');
      return;
    }
    
    // Si ya estaba finalizado, guardar directo
    executeSaveScore(false);
  }

  function executeSaveScore(wasLive) {
    const data = matchesData[currentRetaId];
    const match = data.rounds[currentEditingRound].matches[currentEditingMatch];
    
    // Actualizar marcador
    match.score = { team1: score1, team2: score2 };
    match.winner = score1 > score2 ? 1 : 2;
    
    // Calcular cambio de ELO simple (simulado)
    const eloDiff = Math.abs(score1 - score2) + 3;
    match.eloChanges = { 
      team1: match.winner === 1 ? eloDiff : -eloDiff, 
      team2: match.winner === 2 ? eloDiff : -eloDiff 
    };
    
    
    // Verificar si todos los partidos de la ronda están completos
    const allCompleted = data.rounds[currentEditingRound].matches.every(m => m.winner !== null);
    if (allCompleted) {
      data.rounds[currentEditingRound].status = 'completed';
      
      // Activar siguiente ronda
      const nextRound = currentEditingRound + 1;
      if (data.rounds[nextRound]) {
        data.rounds[nextRound].status = 'in-progress';
      }
    } else {
      // Si no están todos completos, la ronda sigue in-progress
      data.rounds[currentEditingRound].status = 'in-progress';
    }
    
    // Actualizar ranking de jugadores por puntos totales
    updatePlayersRanking(currentRetaId);
    
    // Cerrar modal y refrescar vista completa
    closeScoreModal();
    renderAllRounds(data);
    
    // Actualizar botones de rondas
    const roundsScrollEl = $('roundsScroll');
    if (roundsScrollEl) {
      roundsScrollEl.innerHTML = renderRoundButtons(data.totalRounds, currentRoundView, data);
    }
    
    // Actualizar la tabla de standings con los nuevos puntos
    renderStandingsTable(currentRetaId);
    
    // Verificar si TODA la reta está completada
    const isRetaCompleted = checkRetaCompleted(data);
    
    if (isRetaCompleted) {
      // Mostrar modal de reta completada
      showRetaCompletedModal();
    } else {
      // Mostrar toast normal
      const message = wasLive ? `Partido finalizado · ${score1}-${score2}` : `Marcador actualizado · ${score1}-${score2}`;
      showToast(message);
    }
  }

  // Función para verificar si toda la reta está completada
  function checkRetaCompleted(data) {
    const totalRounds = data.totalRounds || 7;
    
    for (let r = 1; r <= totalRounds; r++) {
      const round = data.rounds[r];
      if (!round || round.status !== 'completed') {
        return false;
      }
    }
    
    return true;
  }

  // Función para mostrar el modal de reta completada
  function showRetaCompletedModal() {
    const modal = document.getElementById('retaCompletedModal');
    if (modal) {
      modal.classList.add('show');
    }
  }

  // Función para ir a resultados desde el modal
  function goToResults() {
    const modal = document.getElementById('retaCompletedModal');
    if (modal) {
      modal.classList.remove('show');
    }
    
    // Activar el tab de resultados
    const resultsTab = document.querySelector('.modal-tab[data-tab="resultados"]');
    if (resultsTab) {
      resultsTab.click();
    }
  }

  function updatePlayersRanking(retaId) {
    const reta = retasData[retaId];
    const matches = matchesData[retaId];
    if (!reta || !matches) return;
    
    // Calcular puntos totales de cada jugador
    const playerTotals = {};
    reta.players.forEach(p => {
      if (!p.empty) {
        playerTotals[p.name] = 0;
      }
    });
    
    // Sumar puntos de todos los partidos completados
    Object.values(matches.rounds).forEach(round => {
      if (round.matches) {
        round.matches.forEach(match => {
          if (match.score) {
            // Sumar puntos al equipo 1
            match.team1.forEach(player => {
              if (playerTotals.hasOwnProperty(player.name)) {
                playerTotals[player.name] += match.score.team1;
              }
            });
            // Sumar puntos al equipo 2
            match.team2.forEach(player => {
              if (playerTotals.hasOwnProperty(player.name)) {
                playerTotals[player.name] += match.score.team2;
              }
            });
          }
        });
      }
    });
    
    // Actualizar los totales en cada jugador y reordenar
    reta.players.forEach(p => {
      if (!p.empty) {
        p.total = playerTotals[p.name] || 0;
      }
    });
    
    // Ordenar por total de puntos (mayor a menor)
    reta.players.sort((a, b) => (b.total || 0) - (a.total || 0));
  }

  function showToast(message, duration = 3000) {
    // Intentar usar el toast del modal primero, luego el de notificación
    const toast = document.getElementById('toast') || document.getElementById('toastNotification');
    if (!toast) return;
    
    // Si es el toast simple, solo actualizar texto
    if (toast.id === 'toast') {
      toast.textContent = message;
    } else {
      // Si es toastNotification con estructura más compleja
      const toastMessage = document.getElementById('toastMessage');
      if (toastMessage) toastMessage.textContent = message;
    }
    
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  function showPlayerToast(playerName) {
    showToast(playerName, 2000);
  }

  function confirmFinalize() {
    document.getElementById('confirmFinalizeOverlay').classList.remove('show');
    executeSaveScore(true);
  }

  function cancelFinalize() {
    document.getElementById('confirmFinalizeOverlay').classList.remove('show');
  }

  // Event listeners para el modal de marcador
  const closeScoreModalBtn = document.getElementById('closeScoreModal');
  const scoreModalOverlay = document.getElementById('scoreModalOverlay');
  const saveScoreBtn = document.getElementById('saveScoreBtn');

  if (closeScoreModalBtn) {
    closeScoreModalBtn.addEventListener('click', closeScoreModal);
  }
  if (scoreModalOverlay) {
    scoreModalOverlay.addEventListener('click', function(e) {
      if (e.target === this) closeScoreModal();
    });
  }
  if (saveScoreBtn) {
    saveScoreBtn.addEventListener('click', saveScore);
  }

  // Event listeners para modal de confirmación finalizar
  const confirmFinalizeBtn = document.getElementById('confirmFinalizeBtn');
  const cancelFinalizeBtn = document.getElementById('cancelFinalizeBtn');
  const confirmFinalizeOverlay = document.getElementById('confirmFinalizeOverlay');

  if (confirmFinalizeBtn) {
    confirmFinalizeBtn.addEventListener('click', confirmFinalize);
  }
  if (cancelFinalizeBtn) {
    cancelFinalizeBtn.addEventListener('click', cancelFinalize);
  }
  if (confirmFinalizeOverlay) {
    confirmFinalizeOverlay.addEventListener('click', function(e) {
      if (e.target === this) cancelFinalize();
    });
  }

  // Event listeners para botones +/-
  document.querySelectorAll('.score-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const team = parseInt(this.dataset.team);
      const delta = this.dataset.action === 'plus' ? 1 : -1;
      updateScore(team, delta);
    });
  });

  // Menú dropdown de tres puntos
  const menuDotsBtn = document.getElementById('menuDotsBtn');
  const dropdownMenu = document.getElementById('dropdownMenu');

  if (menuDotsBtn && dropdownMenu) {
    menuDotsBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!dropdownMenu.contains(e.target) && e.target !== menuDotsBtn) {
        dropdownMenu.classList.remove('show');
      }
    });
    
    // Acciones del menú
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        const action = this.dataset.action;
        dropdownMenu.classList.remove('show');
        
        switch(action) {
          case 'ubicacion':
            alert('Compartir ubicación');
            break;
          case 'registro':
            alert('Compartir registro');
            break;
          case 'editar':
            alert('Editar partido');
            break;
          case 'recrear':
            alert('Volver a crear partido');
            break;
          case 'eliminar':
            if (confirm('¿Estás seguro de eliminar este partido?')) {
              alert('Partido eliminado');
            }
            break;
        }
      });
    });
  }

  // Función para verificar si la reta está terminada
  function isRetaFinished(retaId) {
    const matchData = matchesData[retaId];
    if (!matchData) return false;
    
    const totalRounds = matchData.totalRounds || 7;
    let completedRounds = 0;
    
    for (let r = 1; r <= totalRounds; r++) {
      const round = matchData.rounds[r];
      if (round && round.status === 'completed') {
        completedRounds++;
      }
    }
    
    return completedRounds === totalRounds;
  }
  
  // Función para actualizar el estado de la pestaña de resultados
  function updateResultsTabState() {
    const resultsTab = document.querySelector('.modal-tab[data-tab="resultados"]');
    if (!resultsTab) return;
    
    const finished = isRetaFinished(currentRetaId);
    
    if (finished) {
      resultsTab.classList.remove('disabled');
      resultsTab.style.opacity = '1';
      resultsTab.style.cursor = 'pointer';
    } else {
      resultsTab.classList.add('disabled');
      resultsTab.style.opacity = '0.5';
      resultsTab.style.cursor = 'not-allowed';
    }
  }

  function initModalTabs() {
    const tabs = $$('.modal-tab');
    const playersSection = document.querySelector('.players-section');
    const matchesSection = $('matchesSection');
    const resultsSection = $('resultsSection');
    const modal = document.querySelector('.modal');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetTab = this.dataset.tab;
        
        // Si es la pestaña de resultados, verificar si la reta está terminada
        if (targetTab === 'resultados') {
          if (!isRetaFinished(currentRetaId)) {
            showToast('La reta aún no ha terminado', 'info');
            return; // No hacer nada más
          }
        }
        
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Remover clases de tabs previas
        modal.classList.remove('tab-jugadores', 'tab-partidos', 'tab-resultados');
        modal.classList.add('tab-' + targetTab);
        
        if (targetTab === 'jugadores') {
          playersSection.classList.remove('hidden');
          matchesSection.classList.remove('active');
          if (resultsSection) resultsSection.style.display = 'none';
        } else if (targetTab === 'partidos') {
          playersSection.classList.add('hidden');
          matchesSection.classList.add('active');
          if (resultsSection) resultsSection.style.display = 'none';
          if (currentRetaId) {
            renderMatchesSection(currentRetaId);
          }
        } else if (targetTab === 'resultados') {
          playersSection.classList.add('hidden');
          matchesSection.classList.remove('active');
          if (resultsSection) resultsSection.style.display = 'flex';
          // Actualizar estado de resultados
          updateResultsSection();
        }
      });
    });
  }

  // Función para actualizar la sección de resultados
  function updateResultsSection() {
    const matchData = matchesData[currentRetaId];
    const retaData = retasData[currentRetaId];
    if (!matchData || !retaData) return;
    
    // Contar rondas completadas
    let completedRounds = 0;
    const totalRounds = matchData.totalRounds || 7;
    
    for (let r = 1; r <= totalRounds; r++) {
      const round = matchData.rounds[r];
      if (round && round.status === 'completed') {
        completedRounds++;
      }
    }
    
    const isFinished = completedRounds === totalRounds;
    
    // Mostrar/ocultar estados
    const inProgress = $('resultsInProgress');
    const finished = $('resultsFinished');
    
    if (inProgress) inProgress.style.display = isFinished ? 'none' : 'flex';
    if (finished) finished.style.display = isFinished ? 'block' : 'none';
    
    // Actualizar progreso circular
    if (!isFinished) {
      const progressFill = document.querySelector('.progress-fill');
      const progressCurrent = document.querySelector('.progress-current');
      if (progressFill && progressCurrent) {
        const circumference = 283; // 2 * PI * 45
        const offset = circumference - (completedRounds / totalRounds) * circumference;
        progressFill.style.strokeDashoffset = offset;
        progressCurrent.textContent = completedRounds;
      }
      // También actualizar estadísticas parciales
      updatePartialStats(matchData, retaData);
    }
    
    // Si está finalizada, renderizar el podio y clasificación con datos reales
    if (isFinished) {
      renderFinalResults(matchData, retaData);
    }
  }

  // Función para actualizar estadísticas parciales (en progreso)
  function updatePartialStats(matchData, retaData) {
    // Obtener jugadores ordenados por games
    const sortedPlayers = [...retaData.players].filter(p => !p.empty).sort((a, b) => (b.total || 0) - (a.total || 0));
    
    if (sortedPlayers.length > 0) {
      const leader = sortedPlayers[0];
      
      // Actualizar líder actual
      const leaderAvatar = document.querySelector('.leader-avatar');
      const leaderName = document.querySelector('.leader-name');
      const leaderStats = document.querySelector('.leader-stats');
      
      if (leaderAvatar) leaderAvatar.textContent = leader.name.charAt(0);
      if (leaderName) leaderName.textContent = leader.name;
      if (leaderStats) leaderStats.textContent = `${leader.total || 0} games`;
    }
  }

  // Función para renderizar resultados finales con datos reales
  function renderFinalResults(matchData, retaData) {
    // Obtener jugadores ordenados por puntos
    const sortedPlayers = [...retaData.players].filter(p => !p.empty).sort((a, b) => (b.total || 0) - (a.total || 0));
    
    if (sortedPlayers.length < 3) return;
    
    // Helper para formatear nombre: "Ana Torres"
    const formatName = (fullName) => {
      return fullName;
    };
    
    // Helper para obtener solo el primer nombre
    const getFirstName = (fullName) => fullName.split(' ')[0];
    
    // Obtener el máximo de games para calcular el progreso
    const maxGames = sortedPlayers[0].total || 1;
    const circumference = 100.5; // 2 * PI * 16
    
    // Medallas para top 3
    const medals = ['🥇', '🥈', '🥉'];
    
    // ============================================
    // CALCULAR ESTADÍSTICAS DE JUGADORES
    // ============================================
    const playerStats = {};
    const totalRounds = matchData.totalRounds || 7;
    
    sortedPlayers.forEach((p, idx) => {
      playerStats[p.name] = {
        name: p.name,
        eloInicial: p.elo,
        eloFinal: p.elo, // Se actualizará sumando cambios
        eloDelta: 0,
        initial: p.name.charAt(0),
        position: idx + 1,
        totalGames: p.total || 0,
        wins: 0,
        losses: 0,
        blanqueos: 0,
        currentStreak: 0,
        maxStreak: 0,
        roundResults: Array(totalRounds).fill(null), // null = no jugó, 'W' = ganó, 'L' = perdió
        isRey: p.isRey || false,
        esNuevo: p.esNuevo || false // Para Rookie - hardcoded por ahora
      };
    });
    
    // Calcular wins, losses, blanqueos, rachas y cambios de ELO por ronda
    for (let r = 1; r <= totalRounds; r++) {
      const round = matchData.rounds[r];
      if (!round || !round.matches) continue;
      
      round.matches.forEach(match => {
        if (match.winner && match.score) {
          const winningTeam = match.winner === 1 ? match.team1 : match.team2;
          const losingTeam = match.winner === 1 ? match.team2 : match.team1;
          const winScore = match.winner === 1 ? match.score.team1 : match.score.team2;
          const loseScore = match.winner === 1 ? match.score.team2 : match.score.team1;
          const eloChange = match.eloChanges ? Math.abs(match.eloChanges.team1) : 0;
          
          // Actualizar ganadores
          winningTeam.forEach(player => {
            if (playerStats[player.name]) {
              playerStats[player.name].wins++;
              playerStats[player.name].eloDelta += eloChange;
              playerStats[player.name].currentStreak++;
              playerStats[player.name].roundResults[r - 1] = 'W'; // Registrar victoria en esta ronda
              if (playerStats[player.name].currentStreak > playerStats[player.name].maxStreak) {
                playerStats[player.name].maxStreak = playerStats[player.name].currentStreak;
              }
              // Blanqueo si el rival quedó en 0
              if (loseScore === 0) {
                playerStats[player.name].blanqueos++;
              }
            }
          });
          
          // Actualizar perdedores
          losingTeam.forEach(player => {
            if (playerStats[player.name]) {
              playerStats[player.name].losses++;
              playerStats[player.name].eloDelta -= eloChange;
              playerStats[player.name].currentStreak = 0; // Reset streak
              playerStats[player.name].roundResults[r - 1] = 'L'; // Registrar derrota en esta ronda
            }
          });
        }
      });
    }
    
    // Calcular ELO final
    Object.values(playerStats).forEach(p => {
      p.eloFinal = p.eloInicial + p.eloDelta;
    });
    
    // ============================================
    // CALCULAR MOMENTOS DESTACADOS
    // ============================================
    const momentos = calcularMomentosDestacados(playerStats, matchData, retaData, sortedPlayers);
    
    // ============================================
    // ACTUALIZAR TÍTULO DEL HERO
    // ============================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.textContent = 'Resultados de la reta';
    }
    
    // ============================================
    // RENDERIZAR PODIO (visual mini con bloques bajos)
    // ============================================
    const podium = document.querySelector('.results-podium');
    if (podium && sortedPlayers.length >= 3) {
      const top3 = [sortedPlayers[1], sortedPlayers[0], sortedPlayers[2]]; // 2do, 1ro, 3ro
      const positions = ['second', 'first', 'third'];
      
      let podiumItemsHTML = '';
      top3.forEach((player, idx) => {
        const pos = positions[idx];
        const realPos = pos === 'first' ? 0 : (pos === 'second' ? 1 : 2);
        const games = player.total || 0;
        
        podiumItemsHTML += `
          <div class="podium-item ${pos}">
            <div class="podium-avatar-wrap">
              <div class="podium-avatar">${player.name.charAt(0)}</div>
              <span class="podium-medal">${medals[realPos]}</span>
            </div>
            <div class="podium-name">${realPos + 1}° ${formatName(player.name)}</div>
            <div class="podium-score">${games}</div>
            <div class="podium-block"></div>
          </div>
        `;
      });
      
      podium.innerHTML = `
        <div class="podium-section-title">Ganadores</div>
        <div class="podium-items">${podiumItemsHTML}</div>
      `;
    }
    
    // ============================================
    // RENDERIZAR LISTA COMPLETA DE CLASIFICACIÓN (1-8)
    // ============================================
    const rankingRest = document.getElementById('rankingRest');
    if (rankingRest) {
      const circumferenceList = 113; // 2 * PI * 18
      let listHTML = '<div class="ranking-section-title">Ranking</div>';
      let itemsHTML = '';
      
      for (let i = 0; i < sortedPlayers.length; i++) {
        const player = sortedPlayers[i];
        const games = player.total || 0;
        const progress = games / maxGames;
        const offset = circumferenceList * (1 - progress);
        const position = i + 1;
        
        // Obtener stats del jugador para ELO y W/L
        const stats = playerStats[player.name];
        const eloFinal = stats ? stats.eloFinal : player.elo;
        const eloDelta = stats ? stats.eloDelta : 0;
        const wins = stats ? stats.wins : 0;
        const losses = stats ? stats.losses : 0;
        const deltaClass = eloDelta > 0 ? 'elo-up' : (eloDelta < 0 ? 'elo-down' : '');
        const deltaSign = eloDelta > 0 ? '+' : '';
        const deltaText = eloDelta !== 0 ? `<span class="rr-elo-delta ${deltaClass}">${deltaSign}${eloDelta}</span>` : '';
        
        // Medallas para top 3
        const medal = position <= 3 ? medals[position - 1] : '';
        const isTop3 = position <= 3;
        
        itemsHTML += `
          <div class="ranking-rest-item ${isTop3 ? 'top3' : ''}">
            <span class="rr-pos">${position}</span>
            ${medal ? `<span class="rr-medal">${medal}</span>` : ''}
            <div class="rr-info">
              <span class="rr-name">${formatName(player.name)}</span>
              <span class="rr-record">G${wins} - P${losses}</span>
            </div>
            <div class="rr-elo-col">
              <span class="rr-elo">${eloFinal}</span>
              ${deltaText}
            </div>
            <div class="rr-progress">
              <svg viewBox="0 0 40 40">
                <circle class="progress-bg" cx="20" cy="20" r="18"/>
                <circle class="progress-fill ${isTop3 ? (position === 1 ? 'gold' : position === 2 ? 'silver' : 'bronze') : ''}" cx="20" cy="20" r="18" stroke-dasharray="${circumferenceList}" stroke-dashoffset="${offset}"/>
              </svg>
              <span class="rr-score">${games}</span>
            </div>
          </div>
        `;
      }
      rankingRest.innerHTML = listHTML + '<div class="ranking-items">' + itemsHTML + '</div>';
    }
    
    // ============================================
    // RENDERIZAR LEYENDA ELO
    // ============================================
    const eloLegend = document.getElementById('eloLegend');
    if (eloLegend) {
      const statsArray = Object.values(playerStats);
      const subieron = statsArray.filter(p => p.eloDelta > 0).length;
      const bajaron = statsArray.filter(p => p.eloDelta < 0).length;
      
      // Encontrar el que más subió
      const bestPlayer = statsArray.reduce((best, p) => {
        return (p.eloDelta > (best?.eloDelta || 0)) ? p : best;
      }, null);
      
      const bestText = bestPlayer && bestPlayer.eloDelta > 0 
        ? `🚀 ${formatName(bestPlayer.name)} +${bestPlayer.eloDelta}` 
        : '';
      
      eloLegend.innerHTML = `
        <span class="elo-legend-item up">↑ ${subieron} subieron</span>
        <span class="elo-legend-sep">·</span>
        <span class="elo-legend-item down">↓ ${bajaron} bajaron</span>
        ${bestText ? `<span class="elo-legend-sep">·</span><span class="elo-legend-item best">${bestText}</span>` : ''}
      `;
    }
    
    // ============================================
    // RENDERIZAR LOBBY GRID (Desktop)
    // ============================================
    renderLobbyGrid(sortedPlayers, playerStats, medals, formatName, maxGames, momentos, matchData);
    
    // ============================================
    // RENDERIZAR HEAD TO HEAD (Top 3)
    // ============================================
    renderH2H(sortedPlayers, matchData);
    
    // ============================================
    // RENDERIZAR MOMENTOS DESTACADOS (con carrusel)
    // ============================================
    const momentosGrid = document.getElementById('lobbyMomentosGrid');
    if (momentosGrid) {
      // DEBUG: Forzar 3 momentos de prueba para ver el carrusel
      const momentosPrueba = [
        { tipo: 'underdog', emoji: '⚔️', label: 'Underdog', jugador: 'Pedro', detalle: 'Venció a rivales +110 ELO' },
        { tipo: 'racha', emoji: '🎯', label: 'Racha', jugador: 'Carlos', detalle: '3+ victorias seguidas' },
        { tipo: 'dominante', emoji: '🔥', label: 'Dominante', jugador: 'Ana', detalle: '7 victorias de 7' }
      ];
      const momentosToShow = momentosPrueba; // Forzar prueba
      
      if (momentosToShow.length === 0) {
        momentosGrid.innerHTML = '<div class="momento-empty">No hay momentos destacados</div>';
      } else {
        // Crear carrusel
        let carouselHTML = '<div class="momentos-carousel">';
        carouselHTML += '<div class="momentos-slides">';
        
        momentosToShow.forEach((m, index) => {
          const colorClass = {
            'nuevoRey': 'crown',
            'invicto': 'shield',
            'dominante': 'fire',
            'rookie': 'star',
            'remontada': 'rocket',
            'underdog': 'sword',
            'dentista': 'tooth',
            'racha': 'target'
          }[m.tipo] || 'fire';
          
          carouselHTML += `
            <div class="momento-slide ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="navigateMomento(1)" style="cursor: pointer;">
              <div class="momento-card ${colorClass}">
                <div class="momento-card-header">${m.emoji} ${m.label}</div>
                <div class="momento-card-body">
                  <div class="momento-card-content">
                    <span class="momento-card-value">${getFirstName(m.jugador)}</span>
                    <span class="momento-card-detail">${m.detalle}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        });
        
        carouselHTML += '</div>'; // .momentos-slides
        
        // Agregar solo los dots si hay más de 1 momento (sin flechas)
        if (momentosToShow.length > 1) {
          carouselHTML += `
            <div class="momento-dots">
              ${momentosToShow.map((_, i) => `<span class="momento-dot ${i === 0 ? 'active' : ''}" onclick="goToMomento(${i})"></span>`).join('')}
            </div>
          `;
        }
        
        carouselHTML += '</div>'; // .momentos-carousel
        momentosGrid.innerHTML = carouselHTML;
        
        // Iniciar auto-rotación si hay más de 1
        if (momentosToShow.length > 1) {
          startMomentosAutoRotation(momentosToShow.length);
        }
      }
    }
    
    // ============================================
    // RENDERIZAR LOGROS
    // ============================================
    renderLogros(playerStats, matchData, sortedPlayers);
  }

  // ============================================
  // FUNCIÓN: CALCULAR MOMENTOS DESTACADOS
  // ============================================
  // ============================================
  // FUNCIÓN PARA RENDERIZAR LOBBY GRID (Desktop)
  // ============================================
  function renderLobbyGrid(sortedPlayers, playerStats, medals, formatName, maxGames, momentos, matchData) {
    const circumferenceList = 113;
    const totalRounds = matchData.totalRounds || 7;
    
    // Helper para obtener primer nombre
    const getFirstName = (fullName) => fullName.split(' ')[0];
    
    // === PODIO LOBBY ===
    const lobbyPodium = document.getElementById('lobbyPodiumItems');
    if (lobbyPodium && sortedPlayers.length >= 3) {
      const top3 = [sortedPlayers[1], sortedPlayers[0], sortedPlayers[2]]; // 2do, 1ro, 3ro
      const positions = ['second', 'first', 'third'];
      const winnerName = getFirstName(sortedPlayers[0].name);
      
      // Agregar título arriba del podio
      const podioContainer = lobbyPodium.closest('.content-podio');
      if (podioContainer && !podioContainer.querySelector('.podio-title')) {
        const titleEl = document.createElement('div');
        titleEl.className = 'podio-title';
        titleEl.textContent = `¡${winnerName} gana la reta!`;
        podioContainer.insertBefore(titleEl, lobbyPodium);
      } else if (podioContainer) {
        const existingTitle = podioContainer.querySelector('.podio-title');
        if (existingTitle) existingTitle.textContent = `¡${winnerName} gana la reta!`;
      }
      
      let html = '';
      top3.forEach((player, idx) => {
        const pos = positions[idx];
        const realPos = pos === 'first' ? 0 : (pos === 'second' ? 1 : 2);
        const games = player.total || 0;
        const stats = playerStats[player.name];
        const eloDelta = stats ? stats.eloDelta : 0;
        const deltaClass = eloDelta > 0 ? 'up' : (eloDelta < 0 ? 'down' : '');
        const deltaSign = eloDelta > 0 ? '+' : '';
        const deltaText = eloDelta !== 0 ? `<div class="podium-delta ${deltaClass}">${deltaSign}${eloDelta}</div>` : '';
        
        html += `
          <div class="podium-item ${pos}">
            <div class="podium-avatar-wrap">
              <div class="podium-avatar">${player.name.charAt(0)}</div>
              <span class="podium-medal">${medals[realPos]}</span>
            </div>
            <div class="podium-name">${realPos + 1}° ${formatName(player.name)}</div>
            <div class="podium-score">${games}</div>
            ${deltaText}
          </div>
        `;
      });
      lobbyPodium.innerHTML = html;
    }
    
    // === RANKING LOBBY ===
    const lobbyRanking = document.getElementById('lobbyRankingItems');
    if (lobbyRanking) {
      let html = '';
      for (let i = 0; i < sortedPlayers.length; i++) {
        const player = sortedPlayers[i];
        const games = player.total || 0;
        const progress = games / maxGames;
        const offset = circumferenceList * (1 - progress);
        const position = i + 1;
        
        const stats = playerStats[player.name];
        const eloFinal = stats ? stats.eloFinal : player.elo;
        const eloDelta = stats ? stats.eloDelta : 0;
        const wins = stats ? stats.wins : 0;
        const losses = stats ? stats.losses : 0;
        const roundResults = stats ? stats.roundResults : [];
        const deltaClass = eloDelta > 0 ? 'elo-up' : (eloDelta < 0 ? 'elo-down' : '');
        const deltaSign = eloDelta > 0 ? '+' : '';
        const deltaText = eloDelta !== 0 ? `<span class="rr-elo-delta ${deltaClass}">${deltaSign}${eloDelta}</span>` : '';
        
        const medal = position <= 3 ? medals[position - 1] : '';
        const isTop3 = position <= 3;
        
        // Generar indicadores de rondas
        let roundsHTML = '<div class="rr-rounds">';
        for (let r = 0; r < totalRounds; r++) {
          const result = roundResults[r];
          const roundClass = result === 'W' ? 'win' : (result === 'L' ? 'loss' : 'pending');
          roundsHTML += `<span class="rr-round ${roundClass}">R${r + 1}</span>`;
        }
        roundsHTML += '</div>';
        
        html += `
          <div class="ranking-rest-item ${isTop3 ? 'top3' : ''}">
            <span class="rr-pos">${position}</span>
            <span class="rr-name">${medal ? medal + ' ' : ''}${formatName(player.name)}</span>
            ${roundsHTML}
            <div class="rr-elo-col">
              <span class="rr-elo">${eloFinal}</span>
              ${deltaText}
            </div>
            <div class="rr-progress">
              <svg viewBox="0 0 40 40">
                <circle class="progress-bg" cx="20" cy="20" r="18"/>
                <circle class="progress-fill ${isTop3 ? (position === 1 ? 'gold' : position === 2 ? 'silver' : 'bronze') : ''}" cx="20" cy="20" r="18" stroke-dasharray="${circumferenceList}" stroke-dashoffset="${offset}"/>
              </svg>
              <span class="rr-score">${games}</span>
            </div>
          </div>
        `;
      }
      lobbyRanking.innerHTML = html;
    }
    
    // === MOMENTOS LOBBY === (Se renderiza fuera de renderLobbyGrid con carrusel)
    
    // === LOGROS LOBBY ===
    // Se llena por la función existente de logros
    
    // === ESTADÍSTICAS LOBBY ===
    const lobbyStats = document.getElementById('lobbyEloStats');
    if (lobbyStats) {
      const statsArray = Object.values(playerStats);
      const subieron = statsArray.filter(p => p.eloDelta > 0).length;
      const bajaron = statsArray.filter(p => p.eloDelta < 0).length;
      
      const bestPlayer = statsArray.reduce((best, p) => {
        return (p.eloDelta > (best?.eloDelta || 0)) ? p : best;
      }, null);
      
      const bestText = bestPlayer && bestPlayer.eloDelta > 0 
        ? `🚀 ${formatName(bestPlayer.name)} +${bestPlayer.eloDelta}` 
        : '';
      
      lobbyStats.innerHTML = `
        <div class="elo-stats-row">
          <span class="elo-legend-item up">↑ ${subieron} subieron</span>
          <span class="elo-legend-item down">↓ ${bajaron} bajaron</span>
          ${bestText ? `<span class="elo-legend-item best">${bestText}</span>` : ''}
        </div>
      `;
    }
    
    // === LOGROS COUNT ===
    const lobbyLogrosCount = document.getElementById('lobbyLogrosCount');
    const originalLogrosCount = document.getElementById('logrosCount');
    if (lobbyLogrosCount && originalLogrosCount) {
      lobbyLogrosCount.textContent = originalLogrosCount.textContent;
    }
  }

  // ============================================
  // FUNCIÓN: RENDERIZAR HEAD TO HEAD (Top 3)
  // ============================================
  function renderH2H(sortedPlayers, matchData) {
    const h2hCard = document.getElementById('lobbyH2hCard');
    if (!h2hCard || sortedPlayers.length < 3) return;
    
    const top3 = sortedPlayers.slice(0, 3);
    const top3Names = top3.map(p => p.name);
    const totalRounds = matchData.totalRounds || 7;
    
    // Helper para obtener primer nombre
    const getFirstName = (name) => name.split(' ')[0];
    
    // Recopilar todos los partidos individuales entre Top 3
    const h2hMatches = [];
    
    for (let r = 1; r <= totalRounds; r++) {
      const round = matchData.rounds[r];
      if (!round || !round.matches) continue;
      
      round.matches.forEach(match => {
        if (!match.winner || !match.score) return;
        
        const team1Names = match.team1.map(p => p.name);
        const team2Names = match.team2.map(p => p.name);
        
        // Encontrar jugadores Top 3 en cada equipo
        const top3InTeam1 = team1Names.filter(n => top3Names.includes(n));
        const top3InTeam2 = team2Names.filter(n => top3Names.includes(n));
        
        // Solo contar si hay exactamente 1 jugador Top 3 en cada equipo
        if (top3InTeam1.length === 1 && top3InTeam2.length === 1) {
          const playerA = top3InTeam1[0];
          const playerB = top3InTeam2[0];
          const winnerName = match.winner === 1 ? playerA : playerB;
          const scoreA = match.winner === 1 ? 1 : 0;
          const scoreB = match.winner === 1 ? 0 : 1;
          
          // Calcular qué tan cerrado fue el marcador real
          const scoreDiff = Math.abs(match.score.team1 - match.score.team2);
          
          h2hMatches.push({
            round: r,
            playerA: playerA,
            playerB: playerB,
            winnerName: winnerName,
            scoreA: scoreA,
            scoreB: scoreB,
            scoreDiff: scoreDiff,
            initialA: playerA.charAt(0),
            initialB: playerB.charAt(0)
          });
        }
      });
    }
    
    // Ordenar por emoción: partidos más cerrados primero, luego por ronda
    h2hMatches.sort((a, b) => {
      if (a.scoreDiff !== b.scoreDiff) return a.scoreDiff - b.scoreDiff;
      return a.round - b.round;
    });
    
    // Tomar los 3 más emocionantes
    const top3Matches = h2hMatches.slice(0, 3);
    
    // Renderizar los partidos
    let html = '<div class="h2h-items">';
    
    top3Matches.forEach(m => {
      const firstNameA = getFirstName(m.playerA);
      const firstNameB = getFirstName(m.playerB);
      
      html += `
        <div class="h2h-item">
          <span class="h2h-round">R${m.round}</span>
          <div class="h2h-player">
            <span class="h2h-avatar">${m.initialA}</span>
            <span class="h2h-name">${firstNameA}</span>
          </div>
          <div class="h2h-score">
            <span class="h2h-wins ${m.scoreA > m.scoreB ? 'winner' : ''}">${m.scoreA}</span>
            <span class="h2h-separator">-</span>
            <span class="h2h-wins ${m.scoreB > m.scoreA ? 'winner' : ''}">${m.scoreB}</span>
          </div>
          <div class="h2h-player">
            <span class="h2h-avatar">${m.initialB}</span>
            <span class="h2h-name">${firstNameB}</span>
          </div>
        </div>
      `;
    });
    
    // Si no hay partidos entre Top 3, mostrar mensaje
    if (top3Matches.length === 0) {
      html += '<div class="h2h-empty">No hubo enfrentamientos directos entre el Top 3</div>';
    }
    
    html += '</div>';
    h2hCard.innerHTML = html;
  }

  function calcularMomentosDestacados(playerStats, matchData, retaData, sortedPlayers) {
    const candidatos = [];
    const statsArray = Object.values(playerStats).sort((a, b) => b.elo - a.elo); // Ordenar por ELO para desempates
    
    // Helper para obtener primer nombre
    const getFirstName = (name) => name.split(' ')[0];
    
    // 1. NUEVO REY: Alguien superó en ELO al Rey actual
    const reyAnterior = retaData.rey?.name;
    const nuevoReyCandidate = sortedPlayers[0]; // El #1 en games
    // Simulamos que si el #1 no era el rey, hay nuevo rey
    if (reyAnterior && nuevoReyCandidate.name !== reyAnterior) {
      candidatos.push({
        prioridad: 1,
        tipo: 'nuevoRey',
        emoji: '👑',
        label: 'Nuevo Rey',
        jugador: nuevoReyCandidate.name,
        detalle: `Destronó a ${getFirstName(reyAnterior)}`
      });
    }
    
    // 2. INVICTO: Ganó todos sus partidos (7/7)
    const invictos = statsArray.filter(p => p.wins === 7 && p.losses === 0);
    if (invictos.length > 0) {
      const invicto = invictos[0]; // El de mayor ELO
      candidatos.push({
        prioridad: 2,
        tipo: 'invicto',
        emoji: '🛡️',
        label: 'Invicto',
        jugador: invicto.name,
        detalle: '7 victorias, 0 derrotas'
      });
    }
    
    // 3. DOMINANTE: Ganó 80%+ de los games totales
    const totalGamesAll = statsArray.reduce((sum, p) => sum + p.totalGames, 0);
    const gamesPerPlayer = totalGamesAll / statsArray.length;
    const dominantes = statsArray.filter(p => p.totalGames >= gamesPerPlayer * 1.3); // 30% más que promedio
    if (dominantes.length > 0 && sortedPlayers[0].total >= maxGamesThreshold(sortedPlayers)) {
      const dominante = dominantes[0];
      const porcentaje = Math.round((dominante.totalGames / (totalGamesAll / 2)) * 100);
      candidatos.push({
        prioridad: 3,
        tipo: 'dominante',
        emoji: '🔥',
        label: 'Dominante',
        jugador: dominante.name,
        detalle: `${dominante.totalGames} games`
      });
    }
    
    // 4. ROOKIE ESTRELLA: Jugador nuevo y quedó top 3 (HARDCODED por ahora)
    // Simulamos que Juan López es nuevo
    const rookies = statsArray.filter(p => p.position <= 3 && p.esNuevo);
    if (rookies.length > 0) {
      candidatos.push({
        prioridad: 4,
        tipo: 'rookie',
        emoji: '⭐',
        label: 'Rookie Estrella',
        jugador: rookies[0].name,
        detalle: `Top ${rookies[0].position} en su 1ª reta`
      });
    }
    
    // 5. REMONTADA: Iba último y terminó top 3 (HARDCODED por ahora)
    // Necesitamos historial de posiciones por ronda - simulamos
    
    // 6. UNDERDOG: Bottom 3 (pos 6-8) le ganó a Top 3 (pos 1-3)
    let underdogWin = null;
    const totalRounds = matchData.totalRounds || 7;
    for (let r = 1; r <= totalRounds && !underdogWin; r++) {
      const round = matchData.rounds[r];
      if (!round || !round.matches) continue;
      
      round.matches.forEach(match => {
        if (match.winner && !underdogWin) {
          const winningTeam = match.winner === 1 ? match.team1 : match.team2;
          const losingTeam = match.winner === 1 ? match.team2 : match.team1;
          
          // Checar si un bottom3 (por ELO inicial) venció a un top3
          const winnerMinElo = Math.min(...winningTeam.map(p => p.elo));
          const loserMaxElo = Math.max(...losingTeam.map(p => p.elo));
          
          // Si el equipo con menor ELO ganó al de mayor ELO (diferencia significativa)
          if (loserMaxElo - winnerMinElo >= 100) {
            const underdogPlayer = winningTeam.reduce((min, p) => p.elo < min.elo ? p : min, winningTeam[0]);
            underdogWin = {
              jugador: underdogPlayer.name,
              diferencia: loserMaxElo - winnerMinElo
            };
          }
        }
      });
    }
    if (underdogWin) {
      candidatos.push({
        prioridad: 6,
        tipo: 'underdog',
        emoji: '⚔️',
        label: 'Underdog',
        jugador: underdogWin.jugador,
        detalle: `Venció a rivales +${underdogWin.diferencia} ELO`
      });
    }
    
    // 7. DENTISTA: 3+ blanqueos
    const dentistas = statsArray.filter(p => p.blanqueos >= 3);
    if (dentistas.length > 0) {
      const dentista = dentistas[0];
      candidatos.push({
        prioridad: 7,
        tipo: 'dentista',
        emoji: '🦷',
        label: 'Dentista',
        jugador: dentista.name,
        detalle: `${dentista.blanqueos} blanqueos`
      });
    }
    
    // 8. MEJOR RACHA: 4+ victorias seguidas
    const rachas = statsArray.filter(p => p.maxStreak >= 4).sort((a, b) => b.maxStreak - a.maxStreak);
    if (rachas.length > 0) {
      const mejor = rachas[0];
      candidatos.push({
        prioridad: 8,
        tipo: 'racha',
        emoji: '🎯',
        label: 'Mejor Racha',
        jugador: mejor.name,
        detalle: `${mejor.maxStreak} victorias seguidas`
      });
    }
    
    // Ordenar por prioridad
    candidatos.sort((a, b) => a.prioridad - b.prioridad);
    
    // Filtrar: un jugador solo aparece una vez
    const jugadoresUsados = new Set();
    const momentos = [];
    
    for (const c of candidatos) {
      if (momentos.length >= 3) break;
      if (jugadoresUsados.has(c.jugador)) continue;
      
      momentos.push(c);
      jugadoresUsados.add(c.jugador);
    }
    
    return momentos;
  }

  function maxGamesThreshold(sortedPlayers) {
    // El 80% del máximo posible
    return sortedPlayers[0].total * 0.8;
  }

  // ============================================
  // FUNCIÓN: RENDERIZAR LOGROS
  // ============================================
  function renderLogros(playerStats, matchData, sortedPlayers) {
    const lobbyLogrosList = document.getElementById('lobbyLogrosList');
    if (!lobbyLogrosList) return;
    
    const statsArray = Object.values(playerStats);
    const formatName = (name) => {
      const parts = name.split(' ');
      if (parts.length >= 2) {
        return `${parts[0]} ${parts[1].charAt(0)}.`;
      }
      return parts[0];
    };
    
    // Definir logros
    const logrosData = [
      {
        id: 'blanqueo',
        nombre: 'Blanqueo',
        desc: 'Dejó al rival en 0',
        emoji: '🧹',
        jugadores: statsArray.filter(p => p.blanqueos > 0).sort((a, b) => b.blanqueos - a.blanqueos).slice(0, 3)
      },
      {
        id: 'racha',
        nombre: 'Racha',
        desc: '3+ victorias seguidas',
        emoji: '🔥',
        jugadores: statsArray.filter(p => p.maxStreak >= 3).sort((a, b) => b.maxStreak - a.maxStreak).slice(0, 3)
      },
      {
        id: 'davidGoliat',
        nombre: 'David y Goliat',
        desc: 'Venció al Rey + #2',
        emoji: '⚔️',
        jugadores: [] // Calcular si alguien venció al equipo Rey + #2
      },
      {
        id: 'heroe',
        nombre: 'Héroe',
        desc: 'Ganó con bottom vs top',
        emoji: '🦸',
        jugadores: [] // Hardcoded por ahora
      },
      {
        id: 'subioNivel',
        nombre: 'Subió de Nivel',
        desc: '+50 ELO en la reta',
        emoji: '📈',
        jugadores: [] // Necesita ELO inicial vs final
      },
      {
        id: 'bullying',
        nombre: 'Bullying',
        desc: 'Ganó todas vs alguien',
        emoji: '😈',
        jugadores: [] // Calcular enfrentamientos directos
      }
    ];
    
    let logrosHTML = '';
    let desbloqueados = 0;
    
    logrosData.forEach(logro => {
      const isUnlocked = logro.jugadores.length > 0;
      if (isUnlocked) desbloqueados++;
      
      let avatarsHTML = '';
      if (isUnlocked) {
        logro.jugadores.forEach(j => {
          const valor = logro.id === 'blanqueo' ? `(${j.blanqueos})` : 
                        logro.id === 'racha' ? `(${j.maxStreak})` : '';
          avatarsHTML += `
            <div class="logro-avatar-item">
              <div class="logro-avatar">${j.initial}</div>
              <span class="logro-avatar-name">${formatName(j.name)} ${valor}</span>
            </div>
          `;
        });
      } else {
        avatarsHTML = `<span class="logro-nadie">Nadie lo logró</span>`;
      }
      
      logrosHTML += `
        <div class="logro-row ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="logro-row-icon">${logro.emoji}</div>
          <div class="logro-row-info">
            <span class="logro-row-name">${logro.nombre}</span>
            <span class="logro-row-desc">${logro.desc}</span>
          </div>
          <div class="logro-row-avatars">
            ${avatarsHTML}
          </div>
        </div>
      `;
    });
    
    // Llenar el lobby
    lobbyLogrosList.innerHTML = logrosHTML;
    
    // Actualizar contador
    const logrosCount = document.getElementById('logrosCount');
    const lobbyLogrosCount = document.getElementById('lobbyLogrosCount');
    if (logrosCount) {
      const total = logrosData.length;
      let countText = '';
      if (desbloqueados === total) {
        countText = '¡Todos desbloqueados! 🎉';
      } else if (desbloqueados >= 4) {
        countText = `${desbloqueados}/${total} · ¡Gran reta!`;
      } else if (desbloqueados >= 1) {
        countText = `${desbloqueados}/${total}`;
      } else {
        countText = `0/${total}`;
      }
      logrosCount.textContent = countText;
      if (lobbyLogrosCount) lobbyLogrosCount.textContent = countText;
    }
  }
  
  // Toggle para mostrar/ocultar logros no conseguidos
  // ============================================
  // EVENT LISTENERS
  // ============================================

  function scrollRoundsCarousel(direction) {
    const scroll = $('roundsScroll');
    if (!scroll) return;
    
    const scrollAmount = 200;
    const newScrollLeft = direction === 'left' 
      ? scroll.scrollLeft - scrollAmount 
      : scroll.scrollLeft + scrollAmount;
    
    scroll.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    setTimeout(() => updateRoundsArrows(), 100);
  }

  function updateRoundsArrows() {
    const scroll = $('roundsScroll');
    const leftArrow = $('roundsArrowLeft');
    const rightArrow = $('roundsArrowRight');
    
    if (!scroll || !leftArrow || !rightArrow) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scroll;
    const maxScroll = scrollWidth - clientWidth;
    
    // Ocultar/mostrar flechas según posición
    leftArrow.style.display = scrollLeft <= 5 ? 'none' : 'flex';
    rightArrow.style.display = scrollLeft >= maxScroll - 5 ? 'none' : 'flex';
  }
  document.addEventListener('click', e => {
    if (e.target === $('modalOverlay')) closeRetaModal();
    if (!e.target.closest('.autocomplete-wrapper') && !e.target.closest('.player-row.empty')) $$('.autocomplete-list').forEach(l => l.classList.remove('show'));
  });

  document.addEventListener('DOMContentLoaded', () => {
    
    $('closeModalBtn').addEventListener('click', closeRetaModal);
    $('cancelLeaveBtn').addEventListener('click', closeConfirmModal);
    $('confirmLeaveBtn').addEventListener('click', confirmLeave);
    $('activityArrowLeft').addEventListener('click', () => scrollCarousel('activity', 'left'));
    $('activityArrowRight').addEventListener('click', () => scrollCarousel('activity', 'right'));
    $$(".reta-row").forEach(row => row.addEventListener("click", function(e) { if (!e.target.closest("button")) openRetaModal(this); }));
    Object.keys(carousels).forEach(type => {
      const carousel = $(carousels[type].el);
      if (carousel) { carousel.scrollLeft = 0; updateArrows(type); carousel.addEventListener('scroll', () => updateArrows(type)); }
    });
    window.addEventListener('resize', () => Object.keys(carousels).forEach(updateArrows));
    
    // Aplicar límite de 3 retas al cargar
    applyRetasLimit();
    
    // Función para generar rondas con algoritmo Americano
    function generateAmericanoRounds(retaId) {
      const reta = retasData[retaId];
      const matches = matchesData[retaId];
      if (!reta || !matches) return;
      
      // Obtener jugadores activos (no vacíos) y ordenar por ELO de mayor a menor
      const activePlayers = reta.players
        .filter(p => !p.empty)
        .sort((a, b) => b.elo - a.elo);
      
      // Actualizar la lista de jugadores en retasData con el nuevo orden
      reta.players = activePlayers;
      
      const numPlayers = activePlayers.length;
      
      if (numPlayers < 4 || numPlayers % 4 !== 0) {
        console.error('Se necesitan múltiplos de 4 jugadores para Americano');
        return;
      }
      
      const numCourts = numPlayers / 4;
      const totalRounds = reta.rondas || 7;
      
      // Algoritmo de rotación para Americano (8 jugadores)
      // Cada jugador juega CON todos una vez y CONTRA todos dos veces
      const rotationSchedule = [
        // Ronda 1
        [[0, 1, 2, 3], [4, 5, 6, 7]],
        // Ronda 2
        [[1, 4, 0, 5], [3, 6, 2, 7]],
        // Ronda 3
        [[0, 3, 4, 7], [1, 2, 5, 6]],
        // Ronda 4
        [[0, 2, 1, 3], [4, 6, 5, 7]],
        // Ronda 5
        [[0, 6, 1, 7], [2, 4, 3, 5]],
        // Ronda 6
        [[1, 6, 0, 4], [2, 5, 3, 7]],
        // Ronda 7
        [[0, 7, 2, 6], [1, 5, 3, 4]]
      ];
      
      // Generar horarios (15 min por partido)
      let startTime = parseInt(reta.hora.split(':')[0]) * 60 + parseInt(reta.hora.split(':')[1]);
      
      // Limpiar rondas existentes
      matches.rounds = {};
      matches.currentRound = 1;
      
      // Generar cada ronda
      for (let r = 0; r < Math.min(totalRounds, rotationSchedule.length); r++) {
        const roundNum = r + 1;
        const roundMatches = [];
        
        const courtMatches = rotationSchedule[r];
        
        for (let c = 0; c < numCourts; c++) {
          const playerIndices = courtMatches[c];
          
          // Calcular tiempo
          const matchStart = startTime + (r * 15);
          const matchEnd = matchStart + 15;
          const timeStr = `${Math.floor(matchStart/60).toString().padStart(2,'0')}:${(matchStart%60).toString().padStart(2,'0')} - ${Math.floor(matchEnd/60).toString().padStart(2,'0')}:${(matchEnd%60).toString().padStart(2,'0')}`;
          
          const match = {
            court: c + 1,
            time: timeStr,
            team1: [
              { 
                name: activePlayers[playerIndices[0]].name, 
                elo: activePlayers[playerIndices[0]].elo,
                initial: activePlayers[playerIndices[0]].name.charAt(0),
                isRey: activePlayers[playerIndices[0]].isRey || false
              },
              { 
                name: activePlayers[playerIndices[1]].name, 
                elo: activePlayers[playerIndices[1]].elo,
                initial: activePlayers[playerIndices[1]].name.charAt(0),
                isRey: activePlayers[playerIndices[1]].isRey || false
              }
            ],
            team2: [
              { 
                name: activePlayers[playerIndices[2]].name, 
                elo: activePlayers[playerIndices[2]].elo,
                initial: activePlayers[playerIndices[2]].name.charAt(0),
                isRey: activePlayers[playerIndices[2]].isRey || false
              },
              { 
                name: activePlayers[playerIndices[3]].name, 
                elo: activePlayers[playerIndices[3]].elo,
                initial: activePlayers[playerIndices[3]].name.charAt(0),
                isRey: activePlayers[playerIndices[3]].isRey || false
              }
            ],
            score: null,
            winner: null,
            eloChanges: null
          };
          
          roundMatches.push(match);
        }
        
        matches.rounds[roundNum] = {
          status: roundNum === 1 ? 'in-progress' : 'pending',
          matches: roundMatches
        };
      }
    }
    
    // Event listener para botón iniciar reta
    $('btnIniciarReta').addEventListener('click', () => {
      const data = retasData[currentRetaId];
      if (!data) return;
      
      const totalSlots = data.players.length;
      const filledPlayers = data.players.filter(p => !p.empty).length;
      const emptySlots = totalSlots - filledPlayers;
      
      if (emptySlots > 0) {
        showToast(`⚠️ Faltan ${emptySlots} jugador${emptySlots > 1 ? 'es' : ''} para iniciar`);
        return;
      }
      
      // Iniciar la reta
      data.started = true;
      
      // Generar rondas automáticamente
      generateAmericanoRounds(currentRetaId);
      openRetaModal({ dataset: { reta: currentRetaId } });
      
      // En móvil, quedarse en la pestaña de jugadores que ahora muestra el leaderboard
      if (window.innerWidth <= 768) {
        const jugadoresTab = document.querySelector('.modal-tab[data-tab="jugadores"]');
        if (jugadoresTab) {
          jugadoresTab.click();
        }
      } else {
        // En desktop, renderizar la sección de partidos
        renderMatchesSection(currentRetaId);
      }
    });
    
    // Event listener para scroll de rondas
    const roundsScroll = $('roundsScroll');
    if (roundsScroll) {
      roundsScroll.addEventListener('scroll', updateRoundsArrows);
      updateRoundsArrows();
    }
    
    // Event listener para botón Ver Resultados del modal de reta completada
    const btnVerResultados = document.getElementById('btnVerResultados');
    if (btnVerResultados) {
      btnVerResultados.addEventListener('click', goToResults);
    }
    
    initModalTabs();
  });
