import { Mongo } from 'meteor/mongo';
import SimpleSchema  from 'simpl-schema';
export const test=new Mongo.Collection('test');
  
export const Tasks1 = new Mongo.Collection('tasks1');

export const Parent = new Mongo.Collection('parent');
Parent.schema = new SimpleSchema({
      Id:{type: String} ,
      ChildAge:{type: Number} ,
      GroupId:{type: String} ,
      S1:{type: Date } ,
      S2:{type: Date },
      S3:{type: Date },
      S4:{type: Date },
      S5:{type: Date, optional:true},
      S6:{type: Date, optional:true },
      Reminders:{type: String },
      Reg_Sessions:{type: Number },
      Attended_Sessions:{type: Number },
      LgaId:{type: String }
});
Parent.attachSchema(Parent.schema);


export const User =new Mongo.Collection('user');
User.schema=new SimpleSchema({
   Id: { type: String  },
   Password: {type: String },
   fname: {type: String },
   lname: {type: String },
   address: {type: String },
   pcode: {type: Number },
   phone: {type: Number },
   email: {type: String },
   photo: { type: String },
   role: { type: String },
   status:{ type: String },
   lastPassUpdate:{ type: Date }
});
User.attachSchema(User.schema);

export const Request=new Mongo.Collection('request');
Request.schema=new SimpleSchema({
     From: {type: String},
     Type: {type:String },
     DateFrom:{type:Date },
     DateTo:{type: Date },
     Remarks:{type:String}
});
Request.attachSchema(Request.schema);


export const Lga=new Mongo.Collection('lga');
Lga.schema=new SimpleSchema({
     LgaId : {type: String },
     Address :{type: String },
     Pcode : {type: Number } ,
     Phone : {type: Number },
     Email : {type: String },
     Sess_Mode : { type: String }
});
Lga.attachSchema(Lga.schema);

export const Groups=new Mongo.Collection('groups');
Groups.schema=new SimpleSchema({
   GroupId :{type: String },
   Name : { type: String },
   LgaId: { type: String },
   TotalSlots:{ type: Number },
   FreeSlots	:{ type: Number },
   Sess_Mode	:{ type:String }
});
Groups.attachSchema(Groups.schema);

export const Session = new Mongo.Collection('session');
Session.schema=new SimpleSchema({
    Session_Id:{type: String },
    For:{type: String },
    GroupId:{type: String },
    Facilitator:{type: String },
    Date:{type: Date },
    Location:{type: String },
    Status:{type: String },
    T_Registered:{type: Number },
    T_Attended:{type: Number }
});
Session.attachSchema(Session.schema);

export const Admin=new Mongo.Collection('admin');
Admin.schema=new SimpleSchema({
   Id	: {type: String },
   Name: {type: String},
   Email: {type: String},
   Password:{type: String},
   LgaId :{type: String }
});
Admin.attachSchema(Admin.schema);

export const Facilitator=new Mongo.Collection('facilitator');
Facilitator.schema=new SimpleSchema({
   Id	:{type: String },
   No_of_Sessions:{type: Number},
   LgaId:{type: String }
});
Facilitator.attachSchema(Facilitator.schema);


export const ChangeRequests = new Mongo.Collection('changeRequestsData');

export const Parent1 = new Mongo.Collection('parent1');
Session.schema=new SimpleSchema({
    SessionNo:{type: Number },
    InfantMonth :{type: String },
    SessionAddress:{type: String },
    StartDate:{type: Date },
	EndDate:{type: Date },
    ActiveDays:{type: Number },
});
export const Facilitators = new Mongo.Collection('facilitatorData');
export const Satisfactiondata = new Meteor.Collection('Satisfactiondata');
export const Testing = new Mongo.Collection('testing');
