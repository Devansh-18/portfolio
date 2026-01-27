export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-purple-300 mb-6">Contact</h2>

      <p className="text-gray-300 mb-4">
        Let’s connect and build something amazing!
      </p>

      <div className="glass p-6 rounded-2xl text-lg space-y-2">
        <p>Email: <span className="text-purple-300">devanshdubey1827@gmail.com</span></p>
        <p>Phone: +91 9151734600</p>
        <p>LeetCode: <a href="https://leetcode.com/u/devansh_dubey" className="text-purple-300 underline">Profile</a></p>
      </div>
    </section>
  );
}
