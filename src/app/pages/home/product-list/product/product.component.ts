export class ProductComponent {

  public id;
  public title;
  public description;
  public price;
  public image;
  public category;

  public constructor(id: number, title: string, category: string, description: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.price = price;
    this.image = image;
  }

}
