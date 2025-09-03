import http.server
import socketserver

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')  # Permitir CORS
        super().end_headers()

PORT = 8000

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Servidor corriendo en http://localhost:{PORT}")
    httpd.serve_forever()
