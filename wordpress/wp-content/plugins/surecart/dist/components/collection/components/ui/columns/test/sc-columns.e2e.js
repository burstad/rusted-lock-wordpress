import{newE2EPage}from"@stencil/core/testing";describe("sc-columns",(()=>{it("renders",(async()=>{const s=await newE2EPage();await s.setContent("<sc-columns></sc-columns>");const e=await s.find("sc-columns");expect(e).toHaveClass("hydrated")}))}));