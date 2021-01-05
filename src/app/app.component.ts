import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IPosts } from './models/post.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators'

interface prod {
  promoCode: string; productName: string; productRate: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myPosts: IPosts[] = [];
  data: string[] = [];
  tempData: IPosts[] = [];
  campaigns: any[] = [];
  promoProducts: any[] = undefined;
  selectedCampaign = {};
  campaignForm: FormGroup | undefined;

  constructor(private dataService: DataService, private fb: FormBuilder) {

  }

  ngOnInit() {

    this.campaignForm = this.fb.group({
      campaign: ['FTTH-PREPAID']
    })

    // step 1 >we get campaigns
    this.dataService.getCampaigns().subscribe(campaigns => {
      this.campaigns = campaigns['campaigns'];
    })

    // Step 2 > get selected campaign
    this.campaignForm.controls.campaign.valueChanges.subscribe(code => {
      console.log(this.campaigns)
      this.selectedCampaign = this.campaigns.filter(campaign => campaign.code === code)[0]

      const promoCodes = this.selectedCampaign['promocodes'] as string[];


      // Step 3 > get products from promocodes
      this.getPromoProducts(promoCodes)

    })



  }

  async getPromoProducts(promoCodes: string[]) {
    const promoProd = await this.dataService.getProductPromo(promoCodes).pipe(first()).toPromise();
    this.promoProducts = promoProd;

    // yenze out side
    const prodCode: prod = promoProd.filter(promoProd => promoProd.promoCode === 'FTTH-EVOTEL-CLAWBACK-100MBUP')[0]['products'] as prod
    console.log(promoProd.filter(promoProd => promoProd.promoCode === 'FTTH-EVOTEL-CLAWBACK-100MBUP')[0]['products'])
    console.log(prodCode)
  }

}