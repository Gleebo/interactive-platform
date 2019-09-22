import React, { useEffect, useState } from "react";
import { fromEvent } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  filter,
  tap
} from "rxjs/operators";

export default function TestForm() {
  const [results, setResults] = useState([]);

  function fakeApi(v) {
    const fakeProducts = new Promise(resolve => {
      setTimeout(
        () => resolve([v + "1", v + "2", v + "3", v + "4", v + "5"]),
        5000
      );
    });
    return fakeProducts;
  }

  const inputRef = React.createRef();

  useEffect(() => {
    const inputSource = fromEvent(inputRef.current, "keyup");
    const input$ = inputSource
      .pipe(
        debounceTime(300),
        map(e => e.target.value),
        filter(value => value.length > 0),
        distinctUntilChanged(),
        tap(v => console.log("request sent for " + v)),
        switchMap(fakeApi),
        tap(results => setResults(results))
      )
      .subscribe(console.log);
    return input$.unsubscribe;
  }, [inputRef]);

  return (
    <div>
      <input type="search" ref={inputRef} />
      <ul id="suggestions">
        {results.map(result => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
