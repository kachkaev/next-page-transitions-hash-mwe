import Link from "next/link";

export default () => {
  return (
    <div>
      <h1>Index page</h1>
      <ul>
        <li>
          <Link href="/long-page">
            <a>/long-page</a>
          </Link>
        </li>
        <li>
          <Link href="/long-page#some-anchor">
            <a>/long-page#some-anchor</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
