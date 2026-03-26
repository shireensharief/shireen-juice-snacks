import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  selectedCategory!: MenuCategory;

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }

  categories: MenuCategory[] = [
    {
      title: 'Fresh Juices',
      icon: '🍊',
      items: [
        { name: 'Orange Juice', description: 'Freshly squeezed sweet oranges', price: '₹79' },
        { name: 'Watermelon Juice', description: 'Cool & refreshing watermelon blend', price: '₹69' },
        { name: 'Pomegranate Juice', description: 'Pure pomegranate, no added sugar', price: '₹99' },
        { name: 'Pineapple Juice', description: 'Tropical pineapple, freshly pressed', price: '₹89' },
        { name: 'Mixed Fruit Juice', description: 'Seasonal fruits blended together', price: '₹99' },
      ],
    },
    {
      title: 'Milkshakes',
      icon: '🥛',
      items: [
        { name: 'Mango Milkshake', description: 'Thick & creamy mango shake', price: '₹119' },
        { name: 'Chocolate Milkshake', description: 'Rich chocolate blended with cold milk', price: '₹129' },
        { name: 'Strawberry Milkshake', description: 'Fresh strawberry with vanilla ice cream', price: '₹129' },
        { name: 'Banana Milkshake', description: 'Banana blended with honey & milk', price: '₹109' },
        { name: 'Oreo Milkshake', description: 'Crushed Oreo cookies with ice cream', price: '₹139' },
      ],
    },
    {
      title: 'Smoothies',
      icon: '🫐',
      items: [
        { name: 'Berry Blast', description: 'Mixed berries with yogurt & honey', price: '₹149' },
        { name: 'Green Detox', description: 'Spinach, banana, apple & ginger', price: '₹139' },
        { name: 'Tropical Sunrise', description: 'Mango, pineapple & coconut milk', price: '₹149' },
        { name: 'Peanut Butter Banana', description: 'Banana, peanut butter & oats', price: '₹159' },
      ],
    },
    {
      title: 'Snacks',
      icon: '🍟',
      items: [
        { name: 'French Fries', description: 'Crispy golden fries with ketchup', price: '₹99' },
        { name: 'Veg Sandwich', description: 'Grilled sandwich with fresh veggies & cheese', price: '₹119' },
        { name: 'Chicken Sandwich', description: 'Grilled chicken with mayo & lettuce', price: '₹149' },
        { name: 'Samosa (2 pcs)', description: 'Crispy pastry with spiced potato filling', price: '₹49' },
        { name: 'Veg Puff', description: 'Flaky puff pastry with veggie filling', price: '₹39' },
        { name: 'Bread Pakora', description: 'Spiced gram flour coated bread, deep fried', price: '₹59' },
      ],
    },
    {
      title: 'Ice Cream',
      icon: '🍦',
      items: [
        { name: 'Vanilla Scoop', description: 'Classic vanilla ice cream', price: '₹69' },
        { name: 'Chocolate Scoop', description: 'Rich Belgian chocolate ice cream', price: '₹79' },
        { name: 'Mango Scoop', description: 'Real mango pulp ice cream', price: '₹79' },
        { name: 'Sundae Special', description: 'Three scoops with nuts, syrup & wafer', price: '₹149' },
        { name: 'Falooda', description: 'Rose falooda with ice cream & vermicelli', price: '₹139' },
      ],
    },
  ];
}
