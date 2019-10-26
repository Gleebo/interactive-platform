import React, { useEffect, useState } from "react";
import { Subject } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  filter,
  tap
} from "rxjs/operators";
import { searchProducts } from "../firebase";

const input$ = new Subject();

export default function TestForm() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  let key = 0; //key for list of results

  async function getSearchSuggestions(keyword) {
    const url = `https://us-central1-kids-islands.cloudfunctions.net/searchAhead?keyword=${keyword}`;
    const response = await fetch(url);
    const suggestions = await response.json();
    return suggestions;
  }

  useEffect(() => {
    console.log("useEffect");
    const input$$ = input$
      .pipe(
        map(e => e.target.value),
        tap(setInput),
        map(v => v.toLowerCase()),
        debounceTime(500),
        filter(value => value.length > 1),
        distinctUntilChanged(),
        switchMap(getSearchSuggestions),
        tap(setResults)
      )
      .subscribe(console.log);

    return () => input$$.unsubscribe();
  }, []);

  return (
    <div>
      <input type="search" value={input} onChange={e => input$.next(e)} />
      <ul id="suggestions">
        {results.map(result => (
          <li key={key++}>{result}</li>
        ))}
      </ul>
      <input
        type="button"
        value="button"
        onClick={async () => {
          console.table(
            await searchProducts.next({
              keyword: "test"
            })
          );
          searchProducts.reset();
          console.table(
            await searchProducts.next({
              keyword: "test",
              category: "test"
            })
          );
          searchProducts.reset();
          console.table(
            await searchProducts.next({
              keyword: "test",
              subject: "History"
            })
          );
          searchProducts.reset();
          console.table(
            await searchProducts.next({
              keyword: "test",
              category: "test",
              subject: "History"
            })
          );
          searchProducts.reset();
          console.table(
            await searchProducts.next({
              category: "test"
            })
          );
          searchProducts.reset();
          console.table(
            await searchProducts.next({
              subject: "History"
            })
          );
          searchProducts.reset();
          console.table(
            await searchProducts.next({
              category: "test",
              subject: "History"
            })
          );
        }}
      />
      <div>{products.map(product => JSON.stringify(product))}</div>
    </div>
  );
}
