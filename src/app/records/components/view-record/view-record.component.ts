import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EAGER, PROUD } from 'src/app/core/constants/emotions-wheel.constant';
import { EmotionRecord } from 'src/app/core/models';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.scss']
})
export class ViewRecordComponent {
  routeUrl!: string;
  title = 'this is a long title of a sample thought record. We are just checking if this is alright';
  emotionRecords: EmotionRecord[] = [
    {
      emotion: EAGER,
      intensity: 0.80
    },
    {
      emotion: PROUD,
      intensity: 0.70
    },
  ];
  situation = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto deleniti rem distinctio, numquam impedit tempore, dolore nobis omnis accusantium beatae soluta. Magnam molestiae nihil repudiandae maxime facilis delectus est id.';
  thoughts = [
    'lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo est, tempor id tincidunt quis, venenatis dignissim enim. Nunc in facilisis enim. Nunc sagittis vestibulum porttitor. Fusce mattis, ex vitae aliquam feugiat, odio enim posuere libero, vitae accumsan augue sem quis ex. Donec interdum sollicitudin ex, non finibus quam. Quisque sem sapien, maximus consectetur elementum quis, dapibus sed neque. Praesent interdum erat ac accumsan commodo. Quisque augue purus, pulvinar non tempus a, blandit eu odio. Curabitur arcu mi, tristique ac risus non, consequat viverra enim. Etiam in lacinia nisi. Cras ut augue sodales ipsum porttitor egestas. Duis sit amet cursus nibh, ac commodo leo. Nunc vel dolor eu nunc tempor auctor.'
  ]

  constructor(private router: Router) { }

  backToMainPage() {
    this.router.navigateByUrl('/records');
  }
}
