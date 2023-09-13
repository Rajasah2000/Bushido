import HttpClientXml from "../Utils/HttpClientXml";

async function AddCategory(data) {
  let endpoind = "add-category";
  return HttpClientXml.post(endpoind, data);
}

async function ViewAllCategory() {
  let endpoind = "view-Category";
  return HttpClientXml.get(endpoind);
}

async function UpdateCategory(id, data) {
  let endpoind = `update-Category/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteCategory(id) {
  let endpoind = `delete-Category/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddCountry(data) {
  let endpoind = "add-Country";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllCountry() {
  let endpoind = "view-Country";
  return HttpClientXml.get(endpoind);
}
async function UpdateCountry(id, data) {
  let endpoind = `update-Country/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteCountry(id) {
  let endpoind = `delete-Country/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddCategoryBanner(data) {
  let endpoind = "add-Category-Banner";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllBannerImage() {
  let endpoind = "view-Category-Banner";
  return HttpClientXml.get(endpoind);
}
async function UpdateBannerImage(id, data) {
  let endpoind = `update-Category-Banner/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteBannerImage(id) {
  let endpoind = `delete-Category-Banner/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddLanguage(data) {
  let endpoind = "add-Language";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllLanguage() {
  let endpoind = "view-Language";
  return HttpClientXml.get(endpoind);
}
async function UpdateLanguage(id, data) {
  let endpoind = `update-Language/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteLanguage(id) {
  let endpoind = `delete-Language/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddSubCategory(data) {
  let endpoind = "add-sub-category";
  return HttpClientXml.post(endpoind, data);
}

async function ViewAllSubCategory(id) {
  let endpoind = `view-Sub-Category/${id}`;
  return HttpClientXml.get(endpoind, id);
}

async function UpdateSubCategory(id, data) {
  let endpoind = `update-sub-Category/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteSubCategory(id) {
  let endpoind = `delete-sub-Category/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddBanner(data) {
  let endpoind = "add-Banner";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllBanner() {
  let endpoind = "view-Banner";
  return HttpClientXml.get(endpoind);
}
async function UpdateBanner(id, data) {
  let endpoind = `update-Banner/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteBanner(id) {
  let endpoind = `delete-Banner/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

async function AddUnit(data) {
  let endpoind = "add-Unit";
  return HttpClientXml.post(endpoind, data);
}
async function ViewAllUnit() {
  let endpoind = "view-Unit";
  return HttpClientXml.get(endpoind);
}
async function UpdateUnit(id, data) {
  let endpoind = `update-Unit/${id}`;
  return HttpClientXml.put(endpoind, data);
}

async function DeleteUnit(id) {
  let endpoind = `delete-Unit/${id}`;
  return HttpClientXml.deletemethod(endpoind);
}

export default {
  AddCategory,
  ViewAllCategory,
  UpdateCategory,
  DeleteCategory,
  AddCountry,
  ViewAllCountry,
  UpdateCountry,
  DeleteCountry,
  AddCategoryBanner,
  ViewAllBannerImage,
  UpdateBannerImage,
  DeleteBannerImage,
  AddLanguage,
  ViewAllLanguage,
  UpdateLanguage,
  DeleteLanguage,
  AddSubCategory,
  ViewAllSubCategory,
  UpdateSubCategory,
  DeleteSubCategory,
  AddBanner,
  ViewAllBanner,
  UpdateBanner,
  DeleteBanner,
  AddUnit,
  ViewAllUnit,
  UpdateUnit,
  DeleteUnit,
};
