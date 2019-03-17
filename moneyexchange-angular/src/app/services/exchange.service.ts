import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ExchangeService {
  protected api = "https://data.fixer.io/api";
  protected authKey = "access_key=" + "af9d533c43f50f34a42aa6d557c852b7";
  protected endpoint = "/convert";
  private response;

  constructor(private httpClient: HttpClient) {}

  public getExchangedAmount(from: string, to: string, amount: number) {
    const url = `${this.api}${this.endpoint}?${
      this.authKey
    }&from=${from}&to=${to}&amount=${amount}`;
    this.httpClient.get(url).subscribe(apiData => (this.response = apiData));
  }
}
