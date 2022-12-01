using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Security.Claims;
using Tabloid.Models;
using Tabloid.Repositories;




namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly IPostRepository _postRepository;


        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        // GET: api/<PostController>
        [HttpGet]
        public IActionResult Get()
        {
            List<Post> posts = _postRepository.GetAllPublishedPosts();
            return Ok(posts);
        }

        [HttpGet("GetByCategory")]
        public IActionResult GetByCategory(int categoryId)
        {
            var post = _postRepository.ListPostsByCategory(categoryId);
            if (categoryId == 0 || post==null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("GetByTag")]
        public IActionResult GetByTag(int tagId)
        {
            var posts = _postRepository.ListPostsByTag(tagId);
            if (tagId == 0) 
            {
                return NotFound("That isn't a tag");
            }
            if(posts == null)
            {
                return NotFound("No posts have that tag");
            }
            return Ok(posts);
        }

    }    
}

//public IActionResult MyPosts()
//{
//    int userId = GetCurrentUserProfileId();
//    var posts = _postRepository.GetUserPosts(userId);
//    return View(posts);
//}

//public IActionResult Details(int id)
//{
//    var post = _postRepository.GetPublishedPostById(id);
//    if (post == null)
//    {
//        int userId = GetCurrentUserProfileId();
//        post = _postRepository.GetUserPostById(id, userId);
//        if (post == null)
//        {
//            return NotFound();
//        }
//    }
//    return View(post);
//}


//        // GET: PostController/Delete/5
//        public ActionResult Delete(int id)
//        {
//            int userId = GetCurrentUserProfileId();
//            var post = _postRepository.GetUserPostById(id, userId);
//            if (post == null)
//            {
//                return View("NotAuthorizedDetails");
//            }
//            else
//            {
//                return View(post);
//            }
//        }

//        // POST: PostController/Delete/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Delete(int id, Post post)
//        {
//            try
//            {
//                _postRepository.DeletePost(id);

//                return RedirectToAction("Index");
//            }
//            catch (Exception ex)
//            {
//                return View(post);
//            }
//        }

//        // GET: PostController1/Edit/5
//        public ActionResult Edit(int id)
//        {
//            var vm = new PostEditViewModel();
//            int userId = GetCurrentUserProfileId();
//            vm.CategoryOptions = _categoryRepository.GetAll();
//            vm.Post = _postRepository.GetUserPostById(id, userId);

//            if (vm.Post == null)
//            {
//                return View("NotAuthorizedDetails");
//            }

//            return View(vm);
//        }

//        // POST: PostController1/Edit/5
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public ActionResult Edit(int id, PostEditViewModel vm)
//        {
//            try
//            {
//                vm.CategoryOptions = _categoryRepository.GetAll();
//                vm.Post.CreateDateTime = DateAndTime.Now;
//                vm.Post.UserProfileId = GetCurrentUserProfileId();
//                _postRepository.UpdatePost(vm.Post);

//                return RedirectToAction("Index");
//            }
//            catch (Exception ex)
//            {
//                return View(vm);
//            }
//        }

//        public IActionResult Create()
//        {
//            var vm = new PostCreateViewModel();
//            vm.CategoryOptions = _categoryRepository.GetAll();
//            return View(vm);
//        }

//        [HttpPost]
//        public IActionResult Create(PostCreateViewModel vm)
//        {
//            try
//            {
//                vm.Post.CreateDateTime = DateAndTime.Now;
//                vm.Post.IsApproved = true;
//                vm.Post.UserProfileId = GetCurrentUserProfileId();

//                _postRepository.Add(vm.Post);

//                return RedirectToAction("Details", new { id = vm.Post.Id });
//            }
//            catch
//            {
//                vm.CategoryOptions = _categoryRepository.GetAll();
//                return View(vm);
//            }
//        }

//        private int GetCurrentUserProfileId()
//        {
//            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
//            return int.Parse(id);
//        }
//    }
//}
