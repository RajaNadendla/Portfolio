import Layout from '../components/Layout';

export default function Contact() {
  return <Layout>
    <h1>Contact Me</h1>
    <form action="https://formspree.io/f/your-form-id" method="POST">
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </Layout>;
}
