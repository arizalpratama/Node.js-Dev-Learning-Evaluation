function parseURL(url) {
  try {
    return new URL(url); // Coba untuk membuat objek URL
  } catch (error) {
    return null; // Jika gagal, kembalikan null
  }
}
