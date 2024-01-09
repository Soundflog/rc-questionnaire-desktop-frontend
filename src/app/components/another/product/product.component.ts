import {Component, Input} from '@angular/core'
import {IProduct} from '../../../models/another/product'
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: IProduct

  details = false
}
