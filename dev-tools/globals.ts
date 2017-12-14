interface AnyObject {[k: string]: any}

let Config = require('../config/config');

let Monitor = require('../monitor');

let LoginServer = require('../loginserver');
let Ladders = require(Config.remoteladder ? '../ladders-remote' : '../ladders');
let Users = require('../users');
type Connection = any;
type User = any;

let Punishments = require('../punishments');
let Chat = require('../chat');
let Rooms = require('../rooms');
type Room = any;
type GlobalRoom = any;
type GameRoom = any;
type ChatRoom = any;

let Verifier = require('../verifier');
let Dnsbl = require('../dnsbl');
let Sockets = require('../sockets');
let TeamValidator = require('../team-validator');
let TeamValidatorAsync = require('../team-validator-async');
