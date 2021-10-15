import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();
  const content = JSON.parse(router.query.options);

  return (
    <div>asddas</div>
  );
}