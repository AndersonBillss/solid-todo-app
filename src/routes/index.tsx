import { Title } from "@solidjs/meta";
import TodoList from "~/components/TodoList";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <TodoList />
    </main>
  );
}
