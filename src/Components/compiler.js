import React, { Component } from "react";
import Header from "./Header";
// import "./Compiler.css"

export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem("input") || ``,
      output: ``,
      language_id: localStorage.getItem("language_Id") || 2,
      user_input: ``,
    };
  }
  input = (event) => {
    event.preventDefault();

    this.setState({ input: event.target.value });
    localStorage.setItem("input", event.target.value);
  };
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  language = (event) => {
    event.preventDefault();

    this.setState({ language_id: event.target.value });
    localStorage.setItem("language_Id", event.target.value);
  };

  submit = async (e) => {
    e.preventDefault();

    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key":
            "393485d310msh266daaec4445c25p1db0b3jsnb9148b519a85", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );
    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();

    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key":
              "393485d310msh266daaec4445c25p1db0b3jsnb9148b519a85", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });

        jsonGetSolution = await getSolution.json();
      }
    }
    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);

      outputText.innerHTML = "";

      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = atob(jsonGetSolution.compile_output);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  render() {
    return (
      <>
        <Header></Header>
        <div className="container mx-auto py-10 h-screen">
          <div className="grid grid-cols-2 gap-8 h-full">
            <div className="col-span-1 h-full">
              <label
                htmlFor="solution"
                className="block text-gray-700 font-bold mb-2"
              >
                <span className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2">
                  <i className="fas fa-code fa-fw fa-lg"></i> Code Here
                </span>
              </label>
              <textarea
                required
                name="solution"
                id="source"
                onChange={this.input}
                className="block w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-4/6 mt-4 ml-2"
                value={this.state.input}
              ></textarea>

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-4 ml-2 "
                onClick={this.submit}
              >
                <i className="fas fa-cog fa-fw"></i> Run
              </button>

              <label htmlFor="tags" className="block mt-4 font-bold">
                <b className="inline-block ml-2">Language:</b>
              </label>
              <select
                value={this.state.language_id}
                onChange={this.language}
                id="tags"
                className="block w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mt-2 "
              >
                <option value="54">C++</option>
                <option value="50">C</option>
                <option value="62">Java</option>
                <option value="71">Python</option>
              </select>
            </div>

            <div className="col-span-1 h-full">
              <div>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  <i className="fas fa-exclamation fa-fw fa-md"></i> Output
                </span>
                <textarea
                  id="output"
                  placeholder="//Output will be displayed here"
                  className="block w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-4/6 mt-4"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <span className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
              <i className="fas fa-user fa-fw fa-md"></i> User Input
            </span>
            <br />
            <textarea
              id="input"
              placeholder="//Enter your test inputs here"
              onChange={this.userInput}
              className="block w-1/2 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mt-4 ml-2"
            ></textarea>
          </div>
        </div>
      </>
    );
  }
}
