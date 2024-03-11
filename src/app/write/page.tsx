export default function Write() {
  return (
    <div>
      <h4>Write</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="content" placeholder="Content" />
        <button type="submit">Button</button>
      </form>
    </div>
  );
}
