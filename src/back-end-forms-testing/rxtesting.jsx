import React, { useState, useEffect } from "react";
import { Subject } from "rxjs";
import { tap, debounceTime, map } from "rxjs/operators";

const input$ = new Subject();

export default function RxTestingFrom() {
  const [input, setInput] = useState("");

  useEffect(() => {
    const input = input$.pipe(
      map(e => e.target.value),
      tap(setInput),
      debounceTime(500)
    );

    const input$$ = input.subscribe(console.log);

    return function cleanup() {
      input$$.unsubscribe();
    };
  }, []);

  return <input type="text" value={input} onChange={e => input$.next(e)} />;
}
