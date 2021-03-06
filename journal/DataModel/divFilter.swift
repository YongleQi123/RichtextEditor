//
//  divFilter.swift
//  journal
//
//  Created by Diqing Chang on 17.02.18.
//  Copyright © 2018 Diqing Chang. All rights reserved.
//

import Foundation
import UIKit

struct divFilter {
    let name: String
    let coverImage: UIImage
    let jsCommand: String
    
    init(name _filterName: String, coverImage _coverImage: UIImage, jsCommand _jsCommand: String) {
        name = _filterName
        jsCommand = _jsCommand
        coverImage = _coverImage
    }
}

class DivFilters {
    static let divFilterList:[divFilter] = [
        divFilter(name: "Blur", coverImage: UIImage(named: "layouts")!, jsCommand: "blur(3px)"),
        divFilter(name: "Black and white", coverImage: UIImage(named: "layouts")!, jsCommand: "grayscale(100%)"),
        divFilter(name: "Overexposed", coverImage: UIImage(named: "layouts")!, jsCommand: "contrast(200%) brightness(150%)"),
        divFilter(name: "Sepia", coverImage: UIImage(named: "layouts")!, jsCommand: "sepia(100%)"),
        divFilter(name: "Saturate", coverImage: UIImage(named: "layouts")!, jsCommand: "saturate(5)"),
        divFilter(name: "Transluzent", coverImage: UIImage(named: "layouts")!, jsCommand: "opacity(30%)"),
        divFilter(name: "Hue Rotate", coverImage: UIImage(named: "layouts")!, jsCommand: "hue-rotate(90deg)"),
        divFilter(name: "Invert", coverImage: UIImage(named: "layouts")!, jsCommand: "invert(100%)"),
    ]
    
}
