//
//  ModelCanvas.swift
//  YarderPro
//
//  Created by Drew Hengehold on 10/15/24.
//

import SwiftUI

struct ModelDrawing: View{
    let spanGround = 25
    let spanMidSpan = 45
    let canvasWidth: CGFloat = 360
    let canvasHeight: CGFloat = 300
    
    //let pointBY = (spanMidSpan * 10^(-2)) * canvasHeight
    let pointAX = 180
  //  let pointAY = (spanGround * 10^(-2)) *
    var body: some View{
        Canvas{context, size in
            context.draw(Image(systemName: "arrow.2.circlepath.circle"), at: CGPoint(x:10, y:150))
           
            //Point B
            context.draw(Image(systemName: "arrow.2.circlepath.circle"), at: CGPoint(x:(360 - 3), y: (spanMidSpan * 10^(-2)) * 300))
        }
        .frame(width:canvasWidth, height:canvasHeight)
        .border(Color.black)
    }
    
}

struct ModelDrawing_Preview: PreviewProvider{
    static var previews: some View {
        ModelDrawing()
    }
}
