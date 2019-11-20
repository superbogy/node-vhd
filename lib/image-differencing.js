var VHD = require( './vhd' )
var fs = require( 'fs' )

module.exports = {

  _readDiff( buffer, offset, length, position, callback ) {

    if( this.footer.diskType !== VHD.TYPE.DIFF ) {
      throw new Error( `Image is not a differencing disk` )
    }

    callback.call( this, new Error( 'image._readDiff() not implemented' ) )

  },

  _writeDiff( buffer, offset, length, position, callback ) {

    if( this.footer.diskType !== VHD.TYPE.DIFF ) {
      throw new Error( `Image is not a differencing disk` )
    }

    callback.call( this, new Error( 'image._writeDiff() not implemented' ) )

  },

}