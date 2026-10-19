import test from 'node:test';
import assert from 'node:assert/strict';
import {restaurants,excluded} from '../src/restaurants.mjs';
import {lineup} from '../src/logic.mjs';
test('provided list never reinserts excluded, fictional, or verified-distance claims',()=>{
 assert.equal(restaurants.length,17);
 assert.equal(new Set(restaurants.map(p=>p.id)).size,17);
 assert.equal(excluded.length,5);
 for(const p of restaurants){assert.ok(!excluded.some(e=>e.name===p.name));assert.equal(p.locationVerified,false);assert.equal(p.distance,undefined);assert.equal(p.demo,undefined)}
});
test('curated wheel selects 10 distinct candidates and covers available cuisines',()=>{
 const available=new Set(restaurants.map(p=>p.category));
 for(let i=0;i<50;i++){const draw=lineup(restaurants);assert.equal(draw.length,10);assert.equal(new Set(draw.map(p=>p.id)).size,10);assert.deepEqual(new Set(draw.map(p=>p.category)),available);assert.ok(draw.every(p=>restaurants.some(r=>r.id===p.id)))}
});
