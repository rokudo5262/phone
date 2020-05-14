USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Stocks](
	[stocks_id] [int] IDENTITY(1,1) not null PRIMARY KEY,
	[product_id][int]null,
  [quantity][int]null,
	[deleted] [bit] NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[updatedby] [nvarchar](255) NULL,
	[createdBy] [nvarchar](255) NULL,
	[updatedDateTime] [datetime] NULL,
	[createdDateTime] [datetime] NULL,
);

INSERT INTO [Stocks]( product_id,quantity,deleted)
   VALUES
   ('1','100','0'),
   ('2','100','0');

ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [DF_stocks_deleted]  DEFAULT ((0)) FOR [deleted]
GO

