/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  static count = 0;
  #name;
  #instrument;
  // статичне поле count, яке відслідковує кількість музикантів, початкове значення 0
  // Об'являємо приватні поля #name; #instrument;

  constructor(name, instrument) {
    this.#name = name;
    this.#instrument = instrument;
    Musician.count += 1;
    // Конструктор приймає два параметри: name та instrument
    // присвоєння вхідного значення name до приватного поля #name
    // присвоєння вхідного значення instrument до приватного поля #instrument
    // збільшення значення статичного поля на 1
  }

  get name() {
    return this.#name;
    // гетер для приватного поля #name
    // повертає значення приватного поля #name
  }

  get instrument() {
    return this.#instrument;
    // гетер для приватного поля #instrument
    // повертає значення приватного поля #instrument
  }

  set name(newName) {
    this.#name = newName;
    // сетер для приватного поля #name
    // присвоює нове значення приватному полю #name
  }

  set instrument(newInstrument) {
    this.#instrument = newInstrument;
    // сетер для приватного поля #instrument
    // присвоює нове значення приватному полю #instrument
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`);
    // метод, що виводить рядок в консоль <#name> грає на <#instrument>
  }
}

/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  #band;

  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(newBand) {
    this.#band = newBand;
  }

  play() {
    console.log(
      `${this.name} грає на ${this.instrument} у групі ${this.#band}`
    );
  }
  // Конструктор приймає три параметри: name, instrument та band
  // Об'являємо приватні поля #band;

  // виклик конструктора батьківського класу super з двома параметрами name, instrument
  // присвоєння вхідного значення band до приватного поля #band

  // гетер для приватного поля #band
  // повертає значення приватного поля #band

  // сетер для приватного поля #band
  // присвоює нове значення приватному полю #band

  // метод joinBand, що змінює значення #band, this.#band = band

  // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}
}

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  #band;

  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  play() {
    console.log(
      `${this.name} грає на ${this.instrument} у групі ${this.#band}`
    );
  }

  joinBand(newBand) {
    this.#band = newBand;
  }
  // Об'являємо приватні поля  #band;

  // Конструктор приймає три параметри: name, instrument та band
  // виклик конструктора батьківського класу super з двома параметрами name, instrument
  // присвоєння вхідного значення band до приватного поля #band

  // гетер для приватного поля #band
  // повертає значення приватного поля #band
  // сетер для приватного поля #band
  // присвоює нове значення приватному полю #band
  // метод joinBand, що змінює значення #band,this.#band = band
  // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}
}

Object.defineProperty(Musician.prototype, "band", {
  set(newBand) {
    console.warn("Musician не має гурту за замовченням!");
    this._band = newBand; // встановлення значення для приватної властивості _band
  },
});
// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.band = newBand

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  #name;
  #members;

  constructor(name, members) {
    this.#name = name;
    this.#members = members;
  }

  get name() {
    return this.#name;
  }

  get members() {
    return this.#members;
  }

  set name(newName) {
    this.#name = newName;
  }

  addMember(newMember) {
    if (newMember instanceof Musician) {
      newMember.band = this.#name; // використання сетера band
      this.#members.push(newMember);
    } else {
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }

  playMusic() {
    this.#members.forEach((member) => member.play());
  }
  // Об'являємо приватні поля #name; #members;
  /*
   * Створюємо конструктор з двома вхідними параметрами: #name і #members
   * #members - це масив об'єктів, що є екземплярами класу Musician або його нащадків
   */
  // Створюємо getter для #name, що повертає приватну властивість #name
  // Створюємо getter для #members, що повертає приватну властивість #members
  // Створюємо сетер для #name
  // Створюємо метод addMember(), що додає нового учасника до гурту
  // Перевіряємо чи Musician є прототипом newMember
  // Ось тут ми використовуємо сетер band класу Musician
  // До приватного поля #members яке є масивом додаємо мового музиканта
  // Якщо ні виводимо в консоль повідомлення Новий учасник повинен бути екземпляром класу Musician
  // Створюємо метод playMusic(), за допомогою forEach перебираємо масив і викликаємо метод play() для кожного учасника гурту
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  #band;
  #location;
  #date;

  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }

  get band() {
    return this.#band;
  }

  get location() {
    return this.#location;
  }

  get date() {
    return this.#date;
  }

  info() {
    console.log(
      `Гурт ${this.#band.name} виступить у ${
        this.#location
      } ${this.#date.toLocaleDateString()}`
    );
  }
  // Об'являємо приватні поля #band; #location; #date;
  // Створюємо конструктор з трьома вхідними параметрами: #band, #location та #date
  // Створюємо getter для #band, що повертає приватну властивість #band
  // Створюємо getter для #location, що повертає приватну властивість #location
  // Створюємо getter для #date, що повертає приватну властивість #date
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`
}

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  #ticketPrice;

  constructor(band, location, date, ticketPrice) {
    super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }

  get ticketPrice() {
    return this.#ticketPrice;
  }

  set ticketPrice(newPrice) {
    this.#ticketPrice = newPrice;
  }

  info() {
    console.log(
      `Гурт ${this.band.name} виступить у ${
        this.location
      } ${this.date.toLocaleDateString()}, ціна квитка: ${this.#ticketPrice}`
    );
  }
  // Об'являємо приватні поля #ticketPrice;
  // Створюємо конструктор з чотирма вхідними параметрами: #band, #location, #date та #ticketPrice
  // використання super для виклику конструктора базового класу
  // Створюємо getter для #ticketPrice, що повертає приватну властивість #ticketPrice
  // Створюємо setter для #ticketPrice, що дозволяє змінити приватну властивість #ticketPrice
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
}

/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  #name;
  #band;

  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }

  get name() {
    return this.#name;
  }

  get band() {
    return this.#band;
  }

  set name(newName) {
    this.#name = newName;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  info() {
    console.log(`Вокаліст ${this.name} є членом гурту ${this.band}`);
  }
  // Об'являємо приватні поля #name; #band;
  // Створюємо конструктор з двома вхідними параметрами: #name та #band
  // Створюємо getter для #name, що повертає приватну властивість #name
  // Створюємо getter для #band, що повертає приватну властивість #band
  // Створюємо setter для #name, що дозволяє змінити приватну властивість #name
  // Створюємо setter для #band, що дозволяє змінити приватну властивість #band
  // Визначаємо метод info(), який виводить інформацію про вокаліста
  // Виводимо інформацію у форматі: "Вокаліст ${this.name} є членом гурту ${this.band}"
}

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  #songs;

  constructor(songs = []) {
    this.#songs = songs;
  }

  get songs() {
    return this.#songs;
  }

  addSong(song) {
    this.#songs.push(song);
  }

  info() {
    console.log(`Написав ${this.songs.length} пісень`);
  }
  // Об'являємо приватні поля #songs;
  // Створюємо конструктор з одним вхідним параметром: #songs
  // Створюємо getter для #songs, що повертає приватну властивість #songs
  // Створюємо метод addSong для додавання нової пісні до масиву #songs
  // Визначаємо метод info(), який виводить інформацію про автора пісень
  // Виводимо інформацію у форматі: "Написав ${this.songs.length} пісень"
}

/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  #songs;

  constructor(name, band, songs = []) {
    super(name, band);
    this.#songs = songs;
  }

  get songs() {
    return this.#songs;
  }

  info() {
    super.info();
    console.log(`Також є автором пісень: ${this.songs.join(", ")}`);
  }
  // Створюємо конструктор з двома вхідними параметрами: name, band
  // super(name, band);
}

/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */
let musician = new Musician("John", "Guitarist");
/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */
let guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");
/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */
let bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");
// Створення band екземпляру класу Band
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */
let band = new Band("The Beatles", [bassist]);
// Додаємо guitarist до band за допомогою addMember
band.addMember(guitarist);

/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */
let vocalist = new Vocalist("Freddie Mercury", "Queen");
/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

let songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);

// Створення performance екземпляра класу Performance
let performance = new Performance(band, "Liverpool", new Date("2023-08-01"));

/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */

// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype
Object.assign(LeadSinger.prototype, SongWriter.prototype);
/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | band        | band             |
 * | location    | "BBC studios"    |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100              |
 */
let concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);
/*
 * Створення leadsinger екземпляра класу LeadSinger
 * -------------------------------------
 * | Властивість |  Значення         |
 * |-------------|------------------|
 * | name        | "Mick Jagger"    |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */
let leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones", [
  "Yesterday",
  "Hey Jude",
  "Let It Be",
]);

// Методи для тестування розкоментувати після виконня всіх завдань

musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadsinger.info();

// Наданий код визначає класи для `Musician`, `Guitarist`, `Bassist`, `Vocalist`, `SongWriter` та інші, а також екземпляри цих класів, які демонструють їхнє використання в музичному контексті. Нижче наведено огляд коду та того, як він створює внутрішнє дерево пошуку:

// 1. **Музикант**: цей клас представляє базового музиканта, який може грати на будь-якому інструменті. Він має метод «грати», який друкує можливість грати на інструменті, але не вказує конкретний інструмент чи музичний стиль.

// 2. **Guitarist**: екземпляр цього класу успадковує від `Musician`. Він має додаткову властивість `band`, яка представляє групу, в якій він грає, а також метод `play`, перевизначений для друку конкретних деталей про гру на гітарі для Led Zeppelin.

// 3. **Басист**: схожий на гітариста, але замість гітари цей музикант грає на бас-гітарі, а їх основною групою є The Beatles.

// 4. **Вокаліст**: співак, який може виконувати вокал у контексті групи.

// 5. **SongWriter**: Автор, відповідальний за створення пісень.

// 6. **Гурт**: Колекція музикантів, які виступають разом. Він має методи для `playMusic` і `addMember`.

// 7. **Виступ**: екземпляр, що представляє подію, під час якої гурт виступає наживо. Він містить дату, місце та групу, яка бере участь у виступі.

// 8. **Концерт**: представляє концертну подію з конкретним місцем проведення, датою та ціною квитка. Конструктор цього класу приймає `band`, а також інші властивості, типові для концерту.

// 9. **LeadSinger**: розширення `Musician`, яке також включає можливості написання пісень. Цей клас демонструє, як використовувати `Object.assign()` для об’єднання прототипу двох різних класів в один, фактично створюючи новий тип, який поєднує функції обох.

// 10. **Тестування екземплярів і методів**: потім код викликає методи в кожному екземплярі, щоб проілюструвати їх використання в музичному контексті. Це гра на різних інструментах (наприклад, гітара чи бас), спів, написання пісень, концерти тощо.

// У наданому коді метод bassist.play() викликається двічі. Перший виклик відбувається під час виклику `guitarist.play()`, який, у свою чергу, викликає `band.playMusic()`, і цей метод циклічно обходить усіх своїх учасників, щоб відтворити музику кожного з них. Оскільки `bassist` є учасником `band`, він включений у цей цикл і, таким чином, грає двічі: один раз під час виступу гітариста (коли він грає Led Zeppelin) і ще раз, коли басист грає з The Beatles.

// Другий виклик `bassist.play()` відбувається одразу після першого, коли басист додається назад до групи за допомогою `band.addMember()`. Цього разу він не включається в петлю, оскільки він не грає як частина виступу іншого музиканта - він грає свою власну музику, і тому він друкує іншу струну.
