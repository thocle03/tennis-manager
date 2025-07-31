const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/twt.db");

const nationalities = [
  { code: "🇫🇷", names: ["Dupont","Martin","Bernard","Moreau","Lemoine","Girard","Laurent","Petit","Dubois","Faure"] },
  { code: "🇪🇸", names: ["García","Pérez","Fernández","Sánchez","Ramírez","González","Martínez","Rodríguez","Jiménez","Torres"] },
  { code: "🇷🇸", names: ["Jović","Petrović","Milenković","Zorić","Nestorović","Marković","Nikolić","Stojanović","Đurić","Kovačević"] },
  { code: "🇮🇹", names: ["Rossi","Bianchi","Greco","Conti","Ferrari","Esposito","Ricci","Romano","Sarti","Galli"] },
  { code: "🇺🇸", names: ["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Taylor","Anderson"] },
  { code: "🇩🇪", names: ["Müller","Schmidt","Schneider","Becker","Weber","Fischer","Wolf","Schäfer","Koch","Richter"] },
  { code: "🇬🇧", names: ["Smith","Jones","Taylor","Brown","Wilson","Evans","Thomas","Walker","Roberts","Clark"] },
  { code: "🇵🇱", names: ["Nowak","Kowalski","Wiśniewski","Wójcik","Kowalczyk","Kamiński","Lewandowski","Zieliński","Szymański","Woźniak"] },
  { code: "🇷🇺", names: ["Ivanov","Smirnov","Kuznetsov","Popov","Sokolov","Petrov","Volkov","Fedorov","Morozov","Novikov"] },
  { code: "🇨🇳", names: ["Wang","Li","Zhang","Liu","Chen","Yang","Zhao","Huang","Zhou","Wu"] },
  { code: "🇯🇵", names: ["Sato","Suzuki","Takahashi","Tanaka","Watanabe","Ito","Yamamoto","Nakamura","Kobayashi","Kato"] },
  { code: "🇰🇷", names: ["Kim","Lee","Park","Choi","Jung","Kang","Cho","Yoon","Jang","Lim"] },
  { code: "🇮🇳", names: ["Patel","Singh","Kumar","Sharma","Verma","Gupta","Reddy","Mehta","Das","Nair"] },
  { code: "🇸🇪", names: ["Johansson","Andersson","Karlsson","Nilsson","Eriksson","Larsson","Olsson","Persson","Svensson","Gustafsson"] },
  { code: "🇳🇱", names: ["de Jong","Jansen","de Vries","van den Berg","van Dijk","Bakker","Janssen","Visser","Smit","Meijer"] },
  { code: "🇧🇪", names: ["Peeters","Jansen","Maes","Jacobs","Wouters","Mertens","Claes","Goossens","Willems","Dupont"] },
  { code: "🇨🇭", names: ["Müller","Meier","Schmid","Keller","Weber","Steiger","Fischer","Kuhn","Schneider","Baumann"] },
  { code: "🇦🇷", names: ["González","Rodríguez","Gómez","Fernández","López","Martínez","Pérez","Ramírez","Sosa","Romero"] },
  { code: "🇨🇱", names: ["González","Muñoz","Rojas","Díaz","Pérez","Soto","Contreras","Silva","Martínez","Sepúlveda"] },
  { code: "🇨🇴", names: ["Rodríguez","Martínez","García","Gómez","Pérez","Toro","Castro","Ramírez","Moscoso","Uriana"] },
  { code: "🇵🇪", names: ["Quispe","Flores","Sánchez","Rodríguez","García","Rojas","Mamani","Huamán","Pizarro","Torres"] },
  { code: "🇧🇷", names: ["Silva","Santos","Souza","Oliveira","Pereira","Ferreira","Alves","Lima","Rodrigues","Costa"] },
  { code: "🇻🇪", names: ["González","Hernández","Gómez","Rodríguez","Martínez","Pérez","Arias","Rangel","Mora","Suarez"] },
  { code: "🇲🇽", names: ["Hernández","García","López","Martínez","Pérez","Sánchez","González","Ramírez","Torres","De la Cruz"] },
  { code: "🇵🇹", names: ["Silva","Santos","Ferreira","Pereira","Oliveira","Costa","Rodrigues","Martins","Carvalho","Alves"] },
  { code: "🇹🇷", names: ["Yılmaz","Kaya","Demir","Şahin","Çelik","Yıldız","Öztürk","Aydın","Arslan","Doğan"] },
  { code: "🇬🇷", names: ["Papadopoulos","Georgiou","Nikolaidis","Ioannidis","Christodoulou","Pappas","Katsaros","Economou","Vassiliou","Samaras"] },
  { code: "🇫🇮", names: ["Korhonen","Virtanen","Mäkinen","Nieminen","Hämäläinen","Laine","Heikkinen","Koskinen","Järvinen","Lehtonen"] },
  { code: "🇩🇰", names: ["Jensen","Nielsen","Hansen","Pedersen","Andersen","Christensen","Larsen","Sørensen","Rasmussen","Jørgensen"] },
  { code: "🇳🇴", names: ["Hansen","Johansen","Olsen","Larsen","Andersen","Nilsen","Pedersen","Kristiansen","Jensen","Karlsen"] },
  { code: "🇮🇸", names: ["Jónsdóttir","Jónsson","Sigurðsson","Guðmundsdóttir","Einarsson","Magnússon","Kristjánsson","Björnsson","Thórsson","Helgadóttir"] },
  { code: "🇺🇦", names: ["Shevchenko","Kovalenko","Melnyk","Boyko","Kravchenko","Bondarenko","Tkachenko","Polishchuk","Tkachenko","Ivanov"] }
];


const styles = ["attaquant", "défenseur", "contreur", "gros_serveur", "fond_de_court", "créatif"];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generatePlayers = () => {
  const players = [];

  // Catégories avec nombre et points max
  const categories = [
    { label: "légende", count: 4, points: [8000, 10000] },
    { label: "champion", count: 15, points: [4000, 7000] },
    { label: "international", count: 50, points: [1500, 3500] },
    { label: "secondaire", count: 200, points: [200, 1400] },
    { label: "futur", count: 120, points: [10, 180] },
    { label: "prodige", count: 10, points: [100, 900], bonus: "🧠" }
  ];

  for (const cat of categories) {
    for (let i = 0; i < cat.count; i++) {
      const nation = getRandom(nationalities);
      const first = getRandom([
  "Luca", "Nico", "Leo", "Tom", "Rafael", "Alex", "Novak", "Marco",
  "Max", "Theo", "Julian", "Liam", "Matteo", "Hugo", "Oscar", "Milan",
  "Noah", "Enzo", "Lucas", "Ethan", "Antoine", "Simon", "Gabriel", "Victor",
  "Samuel", "David", "Kevin", "Martin", "Adam", "Benjamin", "Sasha", "Arthur",
  "Amir", "Tomas", "Erik", "Joshua", "Daniel", "Marko", "Ivan", "Andrei",
  "Pablo", "Luis", "Carlos", "Diego", "Andres", "João", "Thiago", "Pedro",
  "Kenji", "Akira", "Yuki", "Minho", "Hyun", "Jin", "Haruto", "Sven"
]);

      const last = getRandom(nation.names);
      const name = `${first} ${last}`;
      const style = getRandom(styles);
      const points = Math.floor(Math.random() * (cat.points[1] - cat.points[0])) + cat.points[0];
      players.push({
        name: `${name}${cat.bonus || ""}`,
        nationality: nation.code,
        style,
        points,
      });
    }
  }

  return players;
};

const players = generatePlayers();

db.serialize(() => {
  const stmt = db.prepare("INSERT INTO players (name, nationality, style, points, money) VALUES (?, ?, ?, ?, 0)");

  players.forEach(p => {
    stmt.run(p.name, p.nationality, p.style, p.points);
  });

  stmt.finalize(() => {
    console.log("✅ 400 joueurs IA insérés dans la base !");
    db.close();
  });
});
