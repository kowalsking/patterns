// https://refactoring.guru/uk/design-patterns/singleton
// Singleton (Одинак) - це породжувальний патерн проектування, який гарантує,
// що клас має лише один екземпляр, та надає глобальну точку доступу до нього.

class Singleton {
  private static instance: Singleton = null
  private count: number = 0

  /**
   * Конструктор класу повинен завжди бути приватним, щоб уникнути можливості викликати його через оператор 'new'.
   */
  private constructor() {
    console.log('hello from Singleton', this.count)
  }

  /**
   * Головний статичний метод одинака служить альтирнативою коструктору і є точкою доступу до екземпляра цього класу.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }

  /**
   * Пишемо якусь бізнес логіку, яку користувач очікує від нашого класу.
   */
  public increaseCount(): number {
    return this.count++
  }
}

Singleton.getInstance() // 0
Singleton.getInstance() // 0
Singleton.getInstance() // 0

Singleton.getInstance().increaseCount() // 0