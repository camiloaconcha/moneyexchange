import { Component,OnInit } from "@angular/core";
import { ExchangeService } from "./../services/exchange.service";
@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.scss"]
})
export class ExchangeComponent implements OnInit{
  constructor(private service: ExchangeService) {}
  private toExchange: number;
  private exchanged: number;

  ngOnInit(){
  }

  public getExchanged() {
    this.service.getExchangedAmount('USD','EUR',5);
  }
}
