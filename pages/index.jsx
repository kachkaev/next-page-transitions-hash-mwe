import Link from "next/link";

export default () => {
  return (
    <ul>
      <li>
        <Link href="/long-page">/long-page</Link>
      </li>
      <li>
        <Link href="/long-page#some-anchor">/long-page#some-anchor</Link>
      </li>
    </ul>
  );
};
