// optimised code by defining base request which are same for all, previous unoptimised code is at the bottom:
const zod = require("zod");

const baseRequest = zod.object({
    _id: zod.string().min(1, { message: "ID is required" }),
    name: zod.string(),
});

const createLunchReq = baseRequest.omit({ _id: true }).extend({
    college: zod.string(),
    phoneNumber: zod.number(),
});

const createHousekeepingReq = baseRequest.omit({ _id: true }).extend({
    roomNumber: zod.number(),
});

const createComplainReq = baseRequest.omit({ _id: true }).extend({
    issue: zod.string(),
    roomNumber: zod.number(),
});

const updateLunchReq = baseRequest.extend({
    college: zod.string(),
    phoneNumber: zod.number(),
});

const updateHousekeepingReq = baseRequest.extend({
    roomNumber: zod.number(),
});

const updateComplainReq = baseRequest.extend({
    issue: zod.string(),
    roomNumber: zod.number()
});

module.exports = {
    createLunchReq,
    createHousekeepingReq,
    createComplainReq,
    updateLunchReq,
    updateHousekeepingReq,
    updateComplainReq
};

// const zod = require("zod");

// const createLunchReq = zod.object({
//     name: zod.string(),
//     college: zod.string(),
//     phoneNumber: zod.number()
// })

// const createHousekeepingReq = zod.object({
//     name: zod.string(),
//     rommNumber: zod.number()
// })

// const createComplainReq = zod.object({
//     name: zod.string(),
//     issue: zod.string(),
//     roomNumber: zod.number()
// }) 

// const updateLunchReq = zod.object({
//     _id: zod.string().min(1, { message: "ID is required" }),
//     name: zod.string(),
//     college: zod.string(),
//     phoneNumber: zod.number()
// })

// const updateHousekeepingReq = zod.object({
//     _id: zod.string().min(1, { message: "ID is required" }),
//     name: zod.string(),
//     rommNumber: zod.number()
// })

// const updateComplainReq = zod.object({
//     _id: zod.string().min(1, { message: "ID is required" }),
//     name: zod.string(),
//     issue: zod.string(),
//     roomNumber: zod.number()
// })

// module.exports= {
//     createLunchReq,
//     createHousekeepingReq,
//     createComplainReq,
//     updateLunchReq,
//     updateHousekeepingReq,
//     updateComplainReq
// }
