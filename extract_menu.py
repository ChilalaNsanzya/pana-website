#!/usr/bin/env python3
import sys

try:
    import PyPDF2
except ImportError:
    print("Installing PyPDF2...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2", "--user", "--quiet"])
    import PyPDF2

pdf_path = "Pana food & drinks menu 19 JUNE V2.1.pdf"

with open(pdf_path, 'rb') as file:
    pdf_reader = PyPDF2.PdfReader(file)
    num_pages = len(pdf_reader.pages)
    
    print(f"Total pages: {num_pages}\n")
    print("=" * 80)
    
    for page_num in range(num_pages):
        page = pdf_reader.pages[page_num]
        text = page.extract_text()
        print(f"\n--- PAGE {page_num + 1} ---\n")
        print(text)
        print("\n" + "=" * 80)
