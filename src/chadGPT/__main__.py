from chadGPT.chadGPTcomm import app
import uvicorn
import subprocess
from pathlib import Path
import os
import shutil

parent_path = Path(__file__).resolve().parent.parent
ui_path = parent_path / "chadGPT-ui"
db_loc = parent_path.parent
npm_path = shutil.which('npm')
ng_path = shutil.which('ng')

def main():
    os.chdir(ui_path)
    install_process = subprocess.Popen([npm_path, 'install'], env=os.environ)
    install_process.wait()
    serve_process = subprocess.Popen([ng_path, "serve", "-o"], env=os.environ)
    try:
        os.chdir(db_loc)
        uvicorn.run("chadGPT.chadGPTcomm:app", reload=False)
    finally:
        serve_process.terminate()

if __name__ == "__main__":
    main()