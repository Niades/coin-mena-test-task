import { useMemo } from "react";
import { useQuery } from "react-query";
import { COIN_API_SDK as CoinApiSdk } from "../vendor/coinapi-sdk/coinapi_v1";
import { COIN_API_IO_API_KEY } from "../constants";
import { Spinner } from "../components/Spinner";

interface Rate {
  time: string;
  asset_id_quote: string;
  rate: number;
}

function HomeRoute() {
  const sdk = useMemo(() => new CoinApiSdk(COIN_API_IO_API_KEY), []);
  const { isLoading, error, data } = useQuery("exchangeRates", () =>
    sdk.exchange_rates_get_all_current_rates("BTC").then((result) => result)
  );
  let content = <div></div>;
  if (isLoading) {
    content = <Spinner />;
  } else if (error) {
  } else if (data) {
    content = (
      <table className="table-auto">
        <thead>
          <tr>
            <th>Price</th>
            <th>Icon</th>
            <th>Name</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {data.rates.slice(0, 11).map((rate: Rate) => {
            return (
              <tr key={rate.asset_id_quote}>
                <td>{rate.rate}</td>
                <td>
                  <span className="inline-block rounded p-2 bg-slate-400">
                    {rate.asset_id_quote}
                  </span>
                </td>
                <td>{rate.asset_id_quote}</td>
                <td>
                  <button></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return content;
}

export { HomeRoute };
