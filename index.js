import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Raja Kumar Nadendla</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Search Product Manager | AI & LLM Enthusiast | Thought Leader in AI Search
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          I'm a product manager with a passion for search, AI, and building intelligent systems. I aim to master the intersection of LLMs and semantic retrieval to build next-gen user experiences.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Featured Projects</h2>
        <ul className="space-y-4">
          <li>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Semantic Search with OpenAI + FAISS</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A working demo of RAG (Retrieval-Augmented Generation) powered by OpenAI embeddings and FAISS.
                </p>
                <Link
                  href="https://github.com/rajakumarnadendla/semantic-search-demo"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </Link>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Blog</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>
            <Link href="/blog/hello-world" className="hover:underline text-blue-600">
              Hello World: My Journey Toward AI-Powered Search
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Connect with Me</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://www.linkedin.com/in/rajakumarnadendla" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/rajakumarnadendla" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:raja@rajanadendla.com" className="text-blue-600 hover:underline">
              Email Me
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
