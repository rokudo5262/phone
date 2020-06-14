using System;
using System.Collections.Generic;

namespace phoneserver.Models
{
    public partial class OrderItems
    {
        public int ItemId { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int? Quantity { get; set; }
        public int? ListPrice { get; set; }
        public int? Discount { get; set; }
        public bool? Deleted { get; set; }
        public string Status { get; set; }
        public string Remark { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; } 

        public virtual Orders Order { get; set; }
        public virtual Products Product { get; set; }
    }
}
