//
//  JavaScriptFuncProtocol.swift
//  journal
//
//  Created by Diqing Chang on 08.12.17.
//  Copyright © 2017 Diqing Chang. All rights reserved.
//

import UIKit
import JavaScriptCore

@objc protocol JavaScriptFuncProtocol: JSExport {
    func test()
    func test2(_ value: String, _ num: Int)
}
