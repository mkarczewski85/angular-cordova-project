import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { WordsServiceProvider } from '../../providers/words-service/words-service';
import { WordEntry } from '../../model/wordentry';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage implements OnInit {

  private letters: string;
  private option: string;
  public results: WordEntry[] = [];
  private errorMessage: any = '';

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private wordsService: WordsServiceProvider, private loadingController: LoadingController) {
    this.letters = navParams.get('letters');
    this.option = navParams.get('option');
  }

  ngOnInit() {
    let loader = this.loadingController.create({
      content: "Ładowanie wyników"
    });
    loader.present();
    this.wordsService.getResults(this.letters, this.option).subscribe(
      results => this.results = results,
      error => this.errorMessage = <any>error,
      () => {
        loader.dismiss()
      });

  }
}