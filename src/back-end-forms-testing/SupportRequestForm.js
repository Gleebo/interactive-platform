import React, { useState } from "react";
import { signIn, createTicketForSupport } from "../firebase";

export function SupportRequestForm() {
  const [request, setRequest] = useState({
    title: "",
    content: ""
  });
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  async function handleSubmit(event) {
    event.preventDefault();
    const result = createTicketForSupport(request);
    console.log("request-" + JSON.stringify(request));
    console.log(await result);
  }
  async function handleSubmitForSignIn(event) {
    event.preventDefault();
    const result = await signIn(user.email, user.password);
  }
  return (
    <div>
      <form onSubmit={handleSubmitForSignIn}>
        <table>
          <tbody>
            <tr>
              <td>email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>password</td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={e => setUser({ ...user, password: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="add" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>
                <input
                  type="text"
                  name="title"
                  id="RequestTitle"
                  value={request.title}
                  onChange={e =>
                    setRequest({ ...request, title: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>content</td>
              <td>
                <textarea
                  name="content"
                  id="RequestContent"
                  value={request.content}
                  onChange={e =>
                    setRequest({ ...request, content: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="add" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
