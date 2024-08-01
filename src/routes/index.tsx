import {component$, useSignal} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";



export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <h1>Hi 👋</h1>
      <div class="flat">
        <button onClick$={()=>count.value++} >INCREASE</button>
        <p>{count}Happy coding 🚀</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "HalliS20 Blog",
  meta: [
    {
      name: "Dev Blog",
      content: "Developement/Life Blog",
    },
  ],
};
