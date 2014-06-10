/*
 * miniserver.js
 *
 * @author Mitsunori Inaba <m-inaba@phoenixdesign.jp>
 * Copyright(C) 2014 DesignStudioPhoenix Corporation. All Rights Reserved.
 */

/**
 * Application class
 */
class Application
{
  /**
   * constructor
   */
  constructor()
  {
    //
    // private member
    //
    /** http */
    this.http_ = require('http');
    /** connect */
    this.connect_ = require('connect');

  }

  /**
   * run method
   */
  run()
  {
    /*
     * httpd
     */
    var con = this.connect_()
      .use(this.connect_.static('./'))
      .use(this.connect_.logger('dev'));
    var server = this.http_.createServer(con);

    server.listen(80);
  }
}

var app = new Application();
app.run();

