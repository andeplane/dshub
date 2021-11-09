"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[236],{10236:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var s=n(56532),a=n(58696),r=n(93315),o=n(52111),i=n(59211),l=n(53514),p=n(28084),c=n(11686);class u extends a.BaseKernel{constructor(e){var t;super(e),this._executeDelegate=new r.PromiseDelegate,this._ready=new r.PromiseDelegate;const{pyodideUrl:n}=e,a=l,u=s.URLExt.join(window.location.origin,a),d=p,m=s.URLExt.join(window.location.origin,d),y=c,h=s.URLExt.join(window.location.origin,y),g=null!==(t=e.pyoliteWheel)&&void 0!==t?t:i,b=s.URLExt.join(window.location.origin,g),_=n.slice(0,n.lastIndexOf("/")+1),k=new Blob([[`importScripts("${n}");`,`var indexURL = "${_}";`,`var _widgetsnbextensionWheelUrl = '${u}';`,`var _nbformatWheelUrl = '${m}';`,`var _ipykernelWheelUrl = '${h}';`,`var _pyoliteWheelUrl = '${b}';`,o].join("\n")]);this._worker=new Worker(window.URL.createObjectURL(k)),this._worker.onmessage=e=>{this._processWorkerMessage(e.data)},this._ready.resolve()}dispose(){this.isDisposed||(console.log(`Dispose worker for kernel ${this.id}`),this._worker.terminate(),super.dispose())}get ready(){return this._ready.promise}_processWorkerMessage(e){var t,n,s,a,r,o,i;switch(e.type){case"stream":{const n=null!==(t=e.bundle)&&void 0!==t?t:{name:"stdout",text:""};this.stream(n,e.parentHeader);break}case"input_request":{const t=null!==(n=e.content)&&void 0!==n?n:{prompt:"",password:!1};this.inputRequest(t,e.parentHeader);break}case"reply":{const t=e.results;this._executeDelegate.resolve(t);break}case"display_data":{const t=null!==(s=e.bundle)&&void 0!==s?s:{data:{},metadata:{},transient:{}};this.displayData(t,e.parentHeader);break}case"update_display_data":{const t=null!==(a=e.bundle)&&void 0!==a?a:{data:{},metadata:{},transient:{}};this.updateDisplayData(t,e.parentHeader);break}case"clear_output":{const t=null!==(r=e.bundle)&&void 0!==r?r:{wait:!1};this.clearOutput(t,e.parentHeader);break}case"execute_result":{const t=null!==(o=e.bundle)&&void 0!==o?o:{execution_count:0,data:{},metadata:{}};this.publishExecuteResult(t,e.parentHeader);break}case"execute_error":{const t=null!==(i=e.bundle)&&void 0!==i?i:{ename:"",evalue:"",traceback:[]};this.publishExecuteError(t,e.parentHeader);break}case"comm_msg":case"comm_open":case"comm_close":this.handleComm(e.type,e.content,e.metadata,e.buffers,e.parentHeader);break;default:this._executeDelegate.resolve({data:{},metadata:{}})}}async kernelInfoRequest(){return{implementation:"pyodide",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"python",version:3},file_extension:".py",mimetype:"text/x-python",name:"python",nbconvert_exporter:"python",pygments_lexer:"ipython3",version:"3.8"},protocol_version:"5.3",status:"ok",banner:"Pyolite: A WebAssembly-powered Python kernel backed by Pyodide",help_links:[{text:"Python (WASM) Kernel",url:"https://pyodide.org"}]}}async executeRequest(e){const t=await this._sendRequestMessageToWorker("execute-request",e);return{execution_count:this.executionCount,...t}}async completeRequest(e){return await this._sendRequestMessageToWorker("complete-request",e)}async inspectRequest(e){return await this._sendRequestMessageToWorker("inspect-request",e)}async isCompleteRequest(e){return await this._sendRequestMessageToWorker("is-complete-request",e)}async commInfoRequest(e){return await this._sendRequestMessageToWorker("comm-info-request",e)}inputReply(e){this._worker.postMessage({type:"input-reply",data:e,parent:this.parent})}async commOpen(e){return await this._sendRequestMessageToWorker("comm-open",e)}async commMsg(e){return await this._sendRequestMessageToWorker("comm-msg",e)}async commClose(e){return await this._sendRequestMessageToWorker("comm-close",e)}async _sendRequestMessageToWorker(e,t){return this._executeDelegate=new r.PromiseDelegate,this._worker.postMessage({type:e,data:t,parent:this.parent}),await this._executeDelegate.promise}}const d=[{id:"@jupyterlite/pyolite-kernel-extension:kernel",autoStart:!0,requires:[a.IKernelSpecs],activate:(e,t)=>{const n=s.PageConfig.getOption("pyodideUrl")||"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js",a=s.URLExt.isLocal(n)?s.URLExt.join(window.location.origin,n):n,r=s.PageConfig.getBaseUrl();t.register({spec:{name:"python",display_name:"Pyolite",language:"python",argv:[],spec:{argv:[],env:{},display_name:"Pyolite",language:"python",interrupt_mode:"message",metadata:{}},resources:{"logo-32x32":"TODO","logo-64x64":s.URLExt.join(r,"/kernelspecs/python.png")}},create:async e=>new u({...e,pyodideUrl:a})})}}]},11686:(e,t,n)=>{e.exports=n.p+"ipykernel-5.5.5-py3-none-any.whl"},28084:(e,t,n)=>{e.exports=n.p+"nbformat-4.2.0-py3-none-any.whl"},59211:(e,t,n)=>{e.exports=n.p+"pyolite-0.1.0a16-py3-none-any.whl"},53514:(e,t,n)=>{e.exports=n.p+"widgetsnbextension-3.5.0-py3-none-any.whl"},52111:e=>{e.exports="\"use strict\";\n/**\n * Store the kernel and interpreter instances.\n */\n// eslint-disable-next-line\n// @ts-ignore: breaks typedoc\nlet kernel;\n// eslint-disable-next-line\n// @ts-ignore: breaks typedoc\nlet interpreter;\n// eslint-disable-next-line\n// @ts-ignore: breaks typedoc\nlet pyodide;\n// eslint-disable-next-line\n// @ts-ignore: breaks typedoc\nlet stdout_stream;\n// eslint-disable-next-line\n// @ts-ignore: breaks typedoc\nlet stderr_stream;\n// eslint-disable-next-line\n// @ts-ignore: breaks typedoc\nlet resolveInputReply;\n/**\n * Load Pyodided and initialize the interpreter.\n */\nasync function loadPyodideAndPackages() {\n    // as of 0.17.0 indexURL must be provided\n    pyodide = await loadPyodide({ indexURL });\n    await pyodide.loadPackage(['micropip']);\n    await pyodide.loadPackage(['matplotlib']);\n    await pyodide.runPythonAsync(`\n    import micropip\n    await micropip.install([\n      'traitlets',\n      '${_widgetsnbextensionWheelUrl}',\n      '${_nbformatWheelUrl}',\n      '${_ipykernelWheelUrl}'\n    ])\n    await micropip.install([\n      '${_pyoliteWheelUrl}'\n    ]);\n    await micropip.install('ipython');\n    import pyolite\n  `);\n    // make copies of these so they don't get garbage collected\n    kernel = pyodide.globals.get('pyolite').kernel_instance.copy();\n    stdout_stream = pyodide.globals.get('pyolite').stdout_stream.copy();\n    stderr_stream = pyodide.globals.get('pyolite').stderr_stream.copy();\n    interpreter = kernel.interpreter.copy();\n    interpreter.send_comm = sendComm;\n    const version = pyodide.globals.get('pyolite').__version__;\n    console.log('Pyolite kernel initialized, version', version);\n}\n/**\n * Recursively convert a Map to a JavaScript object\n * @param The Map object to convert\n */\nfunction mapToObject(obj) {\n    const out = obj instanceof Array ? [] : {};\n    obj.forEach((value, key) => {\n        out[key] =\n            value instanceof Map || value instanceof Array ? mapToObject(value) : value;\n    });\n    return out;\n}\n/**\n * Format the response from the Pyodide evaluation.\n *\n * @param res The result object from the Pyodide evaluation\n */\nfunction formatResult(res) {\n    if (!pyodide.isPyProxy(res)) {\n        return res;\n    }\n    // TODO: this is a bit brittle\n    const m = res.toJs();\n    const results = mapToObject(m);\n    return results;\n}\n// eslint-disable-next-line\n// @ts-ignore: breaks typedoc\nconst pyodideReadyPromise = loadPyodideAndPackages();\n/**\n * Send a comm message to the front-end.\n *\n * @param type The type of the comm message.\n * @param content The content.\n * @param metadata The metadata.\n * @param ident The ident.\n * @param buffers The binary buffers.\n */\nasync function sendComm(type, content, metadata, ident, buffers) {\n    postMessage({\n        type: type,\n        content: formatResult(content),\n        metadata: formatResult(metadata),\n        ident: formatResult(ident),\n        buffers: formatResult(buffers),\n        parentHeader: formatResult(kernel._parent_header)['header']\n    });\n}\nasync function getpass(prompt) {\n    prompt = typeof prompt === 'undefined' ? '' : prompt;\n    await sendInputRequest(prompt, true);\n    const replyPromise = new Promise(resolve => {\n        resolveInputReply = resolve;\n    });\n    const result = await replyPromise;\n    return result['value'];\n}\nasync function input(prompt) {\n    prompt = typeof prompt === 'undefined' ? '' : prompt;\n    await sendInputRequest(prompt, false);\n    const replyPromise = new Promise(resolve => {\n        resolveInputReply = resolve;\n    });\n    const result = await replyPromise;\n    return result['value'];\n}\n/**\n * Send a input request to the front-end.\n *\n * @param prompt the text to show at the prompt\n * @param password Is the request for a password?\n */\nasync function sendInputRequest(prompt, password) {\n    const content = {\n        prompt,\n        password\n    };\n    postMessage({\n        type: 'input_request',\n        parentHeader: formatResult(kernel._parent_header)['header'],\n        content\n    });\n}\n/**\n * Execute code with the interpreter.\n *\n * @param content The incoming message with the code to execute.\n */\nasync function execute(content) {\n    const publishExecutionResult = (prompt_count, data, metadata) => {\n        const bundle = {\n            execution_count: prompt_count,\n            data: formatResult(data),\n            metadata: formatResult(metadata)\n        };\n        postMessage({\n            parentHeader: formatResult(kernel._parent_header)['header'],\n            bundle,\n            type: 'execute_result'\n        });\n    };\n    const publishExecutionError = (ename, evalue, traceback) => {\n        const bundle = {\n            ename: ename,\n            evalue: evalue,\n            traceback: traceback\n        };\n        postMessage({\n            parentHeader: formatResult(kernel._parent_header)['header'],\n            bundle,\n            type: 'execute_error'\n        });\n    };\n    const clearOutputCallback = (wait) => {\n        const bundle = {\n            wait: formatResult(wait)\n        };\n        postMessage({\n            parentHeader: formatResult(kernel._parent_header)['header'],\n            bundle,\n            type: 'clear_output'\n        });\n    };\n    const displayDataCallback = (data, metadata, transient) => {\n        const bundle = {\n            data: formatResult(data),\n            metadata: formatResult(metadata),\n            transient: formatResult(transient)\n        };\n        postMessage({\n            parentHeader: formatResult(kernel._parent_header)['header'],\n            bundle,\n            type: 'display_data'\n        });\n    };\n    const updateDisplayDataCallback = (data, metadata, transient) => {\n        const bundle = {\n            data: formatResult(data),\n            metadata: formatResult(metadata),\n            transient: formatResult(transient)\n        };\n        postMessage({\n            parentHeader: formatResult(kernel._parent_header)['header'],\n            bundle,\n            type: 'update_display_data'\n        });\n    };\n    const publishStreamCallback = (name, text) => {\n        const bundle = {\n            name: formatResult(name),\n            text: formatResult(text)\n        };\n        postMessage({\n            parentHeader: formatResult(kernel._parent_header)['header'],\n            bundle,\n            type: 'stream'\n        });\n    };\n    stdout_stream.publish_stream_callback = publishStreamCallback;\n    stderr_stream.publish_stream_callback = publishStreamCallback;\n    interpreter.display_pub.clear_output_callback = clearOutputCallback;\n    interpreter.display_pub.display_data_callback = displayDataCallback;\n    interpreter.display_pub.update_display_data_callback = updateDisplayDataCallback;\n    interpreter.displayhook.publish_execution_result = publishExecutionResult;\n    interpreter.input = input;\n    interpreter.getpass = getpass;\n    const res = await kernel.run(content.code);\n    const results = formatResult(res);\n    if (results['status'] === 'error') {\n        publishExecutionError(results['ename'], results['evalue'], results['traceback']);\n    }\n    return results;\n}\n/**\n * Complete the code submitted by a user.\n *\n * @param content The incoming message with the code to complete.\n */\nfunction complete(content) {\n    const res = kernel.complete(content.code, content.cursor_pos);\n    const results = formatResult(res);\n    return results;\n}\n/**\n * Inspect the code submitted by a user.\n *\n * @param content The incoming message with the code to inspect.\n */\nfunction inspect(content) {\n    const res = kernel.inspect(content.code, content.cursor_pos, content.detail_level);\n    const results = formatResult(res);\n    return results;\n}\n/**\n * Check code for completeness submitted by a user.\n *\n * @param content The incoming message with the code to check.\n */\nfunction isComplete(content) {\n    const res = kernel.is_complete(content.code);\n    const results = formatResult(res);\n    return results;\n}\n/**\n * Respond to the commInfoRequest.\n *\n * @param content The incoming message with the comm target name.\n */\nfunction commInfo(content) {\n    const res = kernel.comm_info(content.target_name);\n    const results = formatResult(res);\n    return {\n        comms: results,\n        status: 'ok'\n    };\n}\n/**\n * Respond to the commOpen.\n *\n * @param content The incoming message with the comm open.\n */\nfunction commOpen(content) {\n    const res = kernel.comm_manager.comm_open(pyodide.toPy(content));\n    const results = formatResult(res);\n    return results;\n}\n/**\n * Respond to the commMsg.\n *\n * @param content The incoming message with the comm msg.\n */\nfunction commMsg(content) {\n    const res = kernel.comm_manager.comm_msg(pyodide.toPy(content));\n    const results = formatResult(res);\n    return results;\n}\n/**\n * Respond to the commClose.\n *\n * @param content The incoming message with the comm close.\n */\nfunction commClose(content) {\n    const res = kernel.comm_manager.comm_close(pyodide.toPy(content));\n    const results = formatResult(res);\n    return results;\n}\n/**\n * Process a message sent to the worker.\n *\n * @param event The message event to process\n */\nself.onmessage = async (event) => {\n    await pyodideReadyPromise;\n    const data = event.data;\n    let results;\n    const messageType = data.type;\n    const messageContent = data.data;\n    kernel._parent_header = pyodide.toPy(data.parent);\n    switch (messageType) {\n        case 'execute-request':\n            console.log('Perform execution inside worker', data);\n            results = await execute(messageContent);\n            break;\n        case 'input-reply':\n            resolveInputReply(messageContent);\n            return;\n        case 'inspect-request':\n            results = inspect(messageContent);\n            break;\n        case 'is-complete-request':\n            results = isComplete(messageContent);\n            break;\n        case 'complete-request':\n            results = complete(messageContent);\n            break;\n        case 'comm-info-request':\n            results = commInfo(messageContent);\n            break;\n        case 'comm-open':\n            results = commOpen(messageContent);\n            break;\n        case 'comm-msg':\n            results = commMsg(messageContent);\n            break;\n        case 'comm-close':\n            results = commClose(messageContent);\n            break;\n        default:\n            break;\n    }\n    const reply = {\n        parentHeader: data.parent['header'],\n        type: 'reply',\n        results\n    };\n    postMessage(reply);\n};\n"}}]);
//# sourceMappingURL=236.06a47ce0e87a69fd9f28.js.map