// Type definitions for gridfs-stream 0.5.0
// Project: https://github.com/aheckmann/gridfs-stream
// Definitions by: Lior Mualem <https://github.com/liorm/>

/* =================== USAGE ===================

 import express = require('express');
 var app = express();

 =============================================== */

/// <reference path="../node/node.d.ts" />
/// <reference path="../mongodb/mongodb.d.ts" />

declare module GridFSStream {
    export interface Range {
        startPos: number;
        endPos: number;
    }

    export interface Options {
        _id?: string;
        filename?: string;
        mode?: string;

        range?: Range;

        // any other options from the GridStore may be passed too, e.g.
        chunkSize?: number;
        content_type?: string;
        root?: string;
        metadata?: any;
    }

    export interface WriteStream extends NodeJS.WritableStream {
    }

    export interface ReadStream extends NodeJS.ReadableStream {
    }
}

declare module "gridfs-stream" {
    import mongo = require('mongodb');

    // Merged declaration, g is both a callable function and a namespace
    function g(db: any, mongo: any): g.Grid;

    module g {

        export class Grid {
            files: mongo.Collection;
            collection: mongo.Collection;

            createWriteStream(options?: GridFSStream.Options): GridFSStream.WriteStream;
            createReadStream(options?: GridFSStream.Options): GridFSStream.ReadStream;
            createWriteStream(options?: string): GridFSStream.WriteStream;
            createReadStream(options?: string): GridFSStream.ReadStream;

            remove(options: GridFSStream.Options, callback: (err: Error) => void): void;
            exist(options: GridFSStream.Options, callback: (err: Error, found: boolean) => void): void;
        }
    }

    export = g;
}

