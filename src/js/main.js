// Global variables

const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currencyList = document.querySelector(".currencies");

const apiURL = "https://api.exchangeratesapi.io/latest";

let baseCurrency;
let baseCurrencyAmount;

const displayCurrencies = ["EUR", "USD", "GBP", "JPY"];

let currencies = [
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },
  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif"
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif"
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif"
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif"
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif"
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif"
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif"
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif"
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif"
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif"
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif"
  },
  {
    name: "Indian Rupee",
    abbreviation: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif"
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif"
  },
  {
    name: "South African Rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif"
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif"
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif"
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif"
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif"
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif"
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif"
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif"
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif"
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif"
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif"
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif"
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif"
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif"
  }
];

// Event listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(e) {
  addCurrencyBtn.classList.toggle("open");
}

addCurrencyList.addEventListener("click", addCurrencyListClick);

function addCurrencyListClick(e) {
  const clickedListItem = e.target.closest("li");
  if (!clickedListItem.classList.contains("disabled")) {
    const newCurrency = currencies.find(c => c.abbreviation === clickedListItem.getAttribute("data-currency"));
    if (newCurrency) newCurrencyListItem(newCurrency);
  }
}

currencyList.addEventListener("click", currencyListClick);

function currencyListClick(e) {
  if (e.target.classList.contains("currency__close")) {
    const parentNode = e.target.parentNode;
    parentNode.remove();
    addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove("disabled");
    if (parentNode.classList.contains("base-currency")) {
      const newBaseCurrencyListItem = currencyList.querySelector(".currency");
      if (newBaseCurrencyListItem) {
        setNewBaseCurrency(newBaseCurrencyListItem);
        baseCurrencyAmount = Number(newBaseCurrencyListItem.querySelector(".currency__info--input input").value);
      }
    }
  }
}

function setNewBaseCurrency(newBaseCurrencyListItem) {
  newBaseCurrencyListItem.classList.add("base-currency");
  baseCurrency = newBaseCurrencyListItem.id;
  const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate;
  currencyList.querySelectorAll(".currency").forEach(currencyListItem => {
    const currencyRate = currencies.find(c => c.abbreviation === currencyListItem.id).rate;
    const exchangeRate = currencyList.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4);
    currencyListItem.querySelector(".currency__info--base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyList.id}`;
  });
}

currencyList.addEventListener("input", currencyListInputChange);

function currencyListInputChange(e) {
  const isNewBaseCurrency = e.target.closest("li").id !== baseCurrency;
  if (isNewBaseCurrency) {
    currencyList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
    setNewBaseCurrency(e.target.closest("li"));
  }

  const newBaseCurrencyAmount = isNaN(e.target.value) ? 0 : Number(e.target.value);
  if (baseCurrencyAmount !== newBaseCurrencyAmount || isNewBaseCurrency) {
    baseCurrencyAmount = newBaseCurrencyAmount;
    const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate;
    currencyList.querySelectorAll(".currency").forEach(currencyListItem => {
      if (currencyListItem.id !== baseCurrency) {
        const currencyRate = currencies.find(c => c.abbreviation === currencyListItem.id).rate;
        const exchangeRate = currencyList.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4);
        currencyListItem.querySelector(".currency__info--input input").value =
          exchangeRate * baseCurrencyAmount !== 0 ? (exchangeRate * baseCurrencyAmount).toFixed(4) : "";
      }
    });
  }
}

// remove focus from element when clicking and reseting input
currencyList.addEventListener("focusout", currencyListFocusOut);

function currencyListFocusOut(e) {
  const inputValue = e.target.value;
  if (isNaN(inputValue) || Number(inputValue) === 0) e.target.value = "";
  else e.target.value = Number(inputValue).toFixed(4);
}

// remove focus from element with enter press
currencyList.addEventListener("keydown", currencyListKeydown);

function currencyListKeydown(e) {
  if (e.key === "Enter") e.target.blur();
}

// add currency list to UI

function addCurrencyListHTML() {
  currencies.forEach(currencie => {
    addCurrencyList.insertAdjacentHTML(
      "beforeend",
      `
  <li data-currency="${currencie.abbreviation}">
    <img src="${currencie.flagURL}" class="flag" /><span>${currencie.abbreviation} - ${currencie.name}</span>
  </li>
  `
    );
  });
}

function displayCurrencyListHTML() {
  for (let i = 0; i < displayCurrencies.length; i++) {
    const currency = currencies.find(c => c.abbreviation === displayCurrencies[i]);
    if (currency) newCurrencyListItem(currency);
  }
}

function newCurrencyListItem(currency) {
  if (currencyList.childElementCount === 0) {
    baseCurrency = currency.abbreviation;
    baseCurrencyAmount = 0;
  }
  addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");
  const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate;
  const exchangeRate = currency.abbreviation === baseCurrency ? 1 : (currency.rate / baseCurrencyRate).toFixed(4);
  const inputValue = baseCurrencyAmount ? (baseCurrencyAmount * exchangeRate).toFixed(4) : "";

  currencyList.insertAdjacentHTML(
    "beforeend",
    `<li class="currency ${currency.abbreviation === baseCurrency ? "base-currency" : ""}" id="${currency.abbreviation}">
          <img src="${currency.flagURL}" class="currency__flag" />
          <div class="currency__info">
            <p class="currency__info--input">
              <span class="currency__info--symbol">${currency.symbol}</span><input type="number" placeholder="0.0000" value=${inputValue} />
            </p>
            <p class="currency__info--name">${currency.abbreviation} - ${currency.name}</p>
            <p class="currency__info--base-currency-rate">
              1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}
            </p>
          </div>
          <span class="currency__close">&times;</span>
      </li>`
  );
}

fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    document.querySelector(".date").textContent = data.date
      .split("-")
      .reverse()
      .join("-");
    data.rates["EUR"] = 1;
    currencies = currencies.filter(c => data.rates[c.abbreviation]);
    currencies.forEach(currency => (currency.rate = data.rates[currency.abbreviation]));
    addCurrencyListHTML();
    displayCurrencyListHTML();
  })
  .catch(err => console.log(err));
